<#
.SYNOPSIS
    Initializes plates.json files for all leaf directories containing SVG files.

.DESCRIPTION
    Initializes plates.json files for all leaf directories containing SVG files under a specified root directory. 
	Each plates.json will be the meta of a test.	

.PARAMETER Root
    Absolute or relative path to the directory containing the SVG files. Default is the current directory.

.NOTES
    Author: ChatGPT and Z
    Date: 2026-05-02
#>
param (
    [Parameter(Mandatory = $false)]
    [string]$Root = "./"
)

# Resolve root path
try {
    $rootPath = (Resolve-Path -Path $Root).Path
} catch {
    Write-Error "Invalid root path: $Root"
    exit 1
}

# Locate sibling script
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$initScript = Join-Path $scriptDir "InitPlatesJson.ps1"

if (-not (Test-Path $initScript)) {
    Write-Error "InitPlatesJson.ps1 not found at: $initScript"
    exit 1
}

# Get all directories recursively
$allDirs = Get-ChildItem -Path $rootPath -Directory -Recurse

foreach ($dir in $allDirs) {

    # Check if leaf folder (no subdirectories)
    $subDirs = Get-ChildItem -Path $dir.FullName -Directory -ErrorAction SilentlyContinue
    if ($subDirs.Count -gt 0) {
        continue
    }

    # Check if contains at least one .svg file
    $svgFiles = Get-ChildItem -Path $dir.FullName -Filter *.svg -File -ErrorAction SilentlyContinue
    if ($svgFiles.Count -gt 0) {

        $resolvedPath = (Resolve-Path $dir.FullName).Path
        Write-Host "Processing: $resolvedPath"

        # Call sibling script
        & $initScript -SourceDir $resolvedPath
    }
}
