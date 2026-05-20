# Authoring Test Contents

This document describe how to authorize test contents by computer literates who can operate a few simple programs and read the help content of various computing resources.

Each test content consists of SVG files of Ishihara plate and meta data defining the Graphic User Interface and the User Interaction.

## Preparation of SVG Files

There are many SVG files free and in public domain in the Internet. And for making your own Ishihara plates, [Ishihara Plate Generator](https://franciscouzo.github.io/ishihara/) is available.

## Content Structure

### Test Content

A test content is stored in a leaf folder containing:
* Ishihara plate svg files.
* `plates.json` which conform to `"$schema": "https://raw.githubusercontent.com/zijianhuang/schemas/refs/heads/main/json/ColorBlindTestSchema.json"`.


### Initialization of Test Content

Rather than crafting plates.json from scratch, you may use a PowerShell script to scaffold then fine tune.
1. Copy all SVG files to the test content folder.
2. Run "InitPlatesJson.ps1" which initializes plates.json by scanning all svg file in the test content folder.

Hints:
1. Generally the plates in the same test content mandate similar GUI and UI, though this is not mandatory.
2. If you have prepare many test contents in leaf folders, `initAll.ps1` is for scanning all leaf folders and generate "plates.json" files accordingly.

### Provide Test Contents to App

The app will read index.json that aggregate the test contents.

