#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Generates index.json conforming to AllColorBlindTestsSchema.json by scanning
    all leaf subfolders for plates.json files conforming to ColorBlindTestSchema.json.

.DESCRIPTION
    Walks every leaf subdirectory under RootPath (directories that contain no further
    subdirectories). For each leaf:
      - If plates.json is present, its content is loaded directly into the TestContent.Test
        field, with the "$schema" property removed if present.
      - If plates.json is absent, a warning is emitted and the folder is skipped.

    Dir for each TestContent is set to the forward-slash relative path of the
    leaf folder from RootPath.

    The output index.json conforms to:
      https://raw.githubusercontent.com/zijianhuang/schemas/refs/heads/main/json/AllColorBlindTestsSchema.json

.PARAMETER RootPath
    The root directory to scan. Defaults to the directory containing this script.

.PARAMETER OutputFile
    Path of the output file. Defaults to "index.json" in RootPath.

.PARAMETER Title
    Title field value for index.json. Defaults to "Color Blind Tests".

.EXAMPLE
    pwsh ./Generate-ColorBlindIndex.ps1

.EXAMPLE
    pwsh ./Generate-ColorBlindIndex.ps1 -RootPath "C:\Tests" -OutputFile "C:\out\index.json" -Title "Ishihara Suite"

.NOTES
    Requires PowerShell 7+.
    Only leaf directories (those with no subdirectories) are considered.
    The RootPath itself is never treated as a leaf.
    Author: Claude and Z
    Date: 2026-05-02
#>

[CmdletBinding()]
param(
	[string] $RootPath = $PSScriptRoot,
	[string] $OutputFile = '',
	[string] $Title = 'Ishihara Plates (2026)',
	[string] $Description = 'Plates and plates'
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# ------------------------------------------------------------------
# Resolve paths
# ------------------------------------------------------------------
if (-not $RootPath) {
	$RootPath = (Get-Location).Path
}
$RootPath = (Resolve-Path -LiteralPath $RootPath).Path

if (-not $OutputFile) {
	$OutputFile = Join-Path $RootPath 'index.json'
}

$AllTestsSchemaUri = 'https://raw.githubusercontent.com/zijianhuang/schemas/refs/heads/main/json/AllColorBlindTestsSchema.json'

# ------------------------------------------------------------------
# Find all leaf subdirectories (subdirs that have no child directories).
# Excludes RootPath itself.
# ------------------------------------------------------------------
Write-Host "Scanning leaf folders under: $RootPath" -ForegroundColor Cyan

$allSubDirs = Get-ChildItem -LiteralPath $RootPath -Directory -Recurse

$leafDirs = @($allSubDirs | Where-Object {
		-not (Get-ChildItem -LiteralPath $_.FullName -Directory -ErrorAction SilentlyContinue)
	})

if ($leafDirs.Count -eq 0) {
	Write-Warning "No subdirectories found under '$RootPath'. index.json will have an empty TestContents array."
}
else {
	Write-Host "Found $($leafDirs.Count) leaf folder(s)." -ForegroundColor Green
}

# ------------------------------------------------------------------
# Build TestContents
# ------------------------------------------------------------------
$testContents = [System.Collections.Generic.List[object]]::new()

foreach ($dir in $leafDirs) {

	# Relative path from RootPath, normalised to forward slashes
	$baseUrl = ([System.IO.Path]::GetRelativePath($RootPath, $dir.FullName)) -replace '\\', '/'

	$platesFile = Join-Path $dir.FullName 'plates.json'

	if (-not (Test-Path -LiteralPath $platesFile -PathType Leaf)) {
		Write-Warning "No plates.json in leaf folder: $baseUrl"
		continue
	}

	Write-Host "  Loading: $baseUrl/plates.json" -ForegroundColor Yellow

	# Parse JSON into a hashtable so keys can be removed cleanly
	try {
		$rawJson = Get-Content -LiteralPath $platesFile -Raw -Encoding UTF8
		$platesObj = $rawJson | ConvertFrom-Json -Depth 20 -AsHashtable
	}
	catch {
		Write-Warning "  [SKIP] Failed to parse '$platesFile': $_"
		continue
	}

	# Remove "$schema" if present — not part of ColorBlindTest in AllColorBlindTestsSchema
	$platesObj.Remove('$schema')

	$testContents.Add([ordered]@{
			dir  = $baseUrl
			test = $platesObj
		})
}

# ------------------------------------------------------------------
# Assemble and write index.json
# ------------------------------------------------------------------
$indexObj = [ordered]@{
	'$schema'    = $AllTestsSchemaUri
	title        = $Title
	description  = $Description
	testContents = $testContents.ToArray()
}

$json = $indexObj | ConvertTo-Json -Depth 20 -EscapeHandling Default

# BOM-less UTF-8
[System.IO.File]::WriteAllText($OutputFile, $json, [System.Text.UTF8Encoding]::new($false))

Write-Host ''
Write-Host "index.json written to: $OutputFile" -ForegroundColor Green
Write-Host "  TestContents entries: $($testContents.Count)"
