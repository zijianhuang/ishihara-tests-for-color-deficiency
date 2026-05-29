<#
.SYNOPSIS
    Initializes a JSON file plates.json based on SVG files in a specified directory. And plates.json will be the meta of a test.

.DESCRIPTION
    Longer description of the script.

.PARAMETER SourceDir
    Absolute or relative path to the directory containing the SVG files. Default is the current directory.

.PARAMETER OutputFile
    Output file is to be saved in the SourceDir. Default is "plates.json".

.PARAMETER Title
    Optional title for the JSON metadata. If not provided, the name of the SourceDir will be used.

.NOTES
    Author: Claude and Z
    Date: 2026-05-02
#>
param(
    [Parameter(Mandatory = $false)]
    [string]$SourceDir = "./",

    [Parameter(Mandatory = $false)]
    [string]$OutputFile = "plates.json",

    [Parameter(Mandatory = $false)]
    [string]$Title
)

$CurrentDir = Get-Location

# Resolve and validate the source directory
$resolvedDir = Resolve-Path -Path $SourceDir -ErrorAction Stop
if (-not (Test-Path -Path $resolvedDir -PathType Container)) {
    Write-Error "SourceDir '$SourceDir' does not exist or is not a directory."
    exit 1
}

if ([string]::IsNullOrEmpty($Title)) { 
    $LeafDir = Split-Path (Resolve-Path $SourceDir) -Leaf
    $Title = $LeafDir    
}


# Enumerate all .svg files in the directory (non-recursive)
$svgFiles = Get-ChildItem -Path $resolvedDir -Filter "*.svg" -File |
Sort-Object Name

if ($svgFiles.Count -eq 0) {
    Write-Warning "No .svg files found in '$resolvedDir'."
	exit 2
}

# Build the Plates array — one entry per SVG file
$plates = [System.Collections.Generic.List[object]]::new()
$order = 1

foreach ($file in $svgFiles) {
    $plates.Add([ordered]@{
            platePath = $file.Name
            nature    = "Letter"       # default; adjust as needed
            input     = "Buttons"      # default; adjust as needed
            order     = 0 # $order
        })
    $order++
}

# Assemble the root object
$root = [ordered]@{
    '$schema' = "https://raw.githubusercontent.com/zijianhuang/schemas/refs/heads/main/json/ColorBlindTestSchema.json"
    title     = $Title
    plates    = $plates
}

# Serialise to JSON (depth 10 keeps nested objects intact)
$json = $root | ConvertTo-Json -Depth 10

# Write output
$json | Set-Content -Path $resolvedDir/$OutputFile -Encoding UTF8

Write-Host "Generated '$OutputFile' with $($plates.Count) plate(s) from '$resolvedDir'."
Set-Location $CurrentDir