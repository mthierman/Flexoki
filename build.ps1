$Repo = $PSScriptRoot
$Build = Join-Path -Path $Repo -ChildPath "build"
$Themes = Join-Path -Path $Repo -ChildPath "themes"
$ThemesTo = Join-Path -Path $Build -ChildPath "themes"
$PackageFrom = Join-Path -Path $Repo -ChildPath "package.json"
$PackageTo = Join-Path -Path $Build -ChildPath "package.json"
$PackageNlsFrom = Join-Path -Path $Repo -ChildPath "package.nls.json"
$PackageNlsTo = Join-Path -Path $Build -ChildPath "package.nls.json"

if (!(Test-Path -Path $Build)) { New-Item -ItemType Directory $Build }

if (Test-Path -Path $PackageTo) { Remove-Item -Path $PackageTo }
Copy-Item -Path $PackageFrom -Destination $Build

if (Test-Path -Path $ThemesTo) { Remove-Item -Path $ThemesTo }
Copy-Item -Path $PackageNlsFrom -Destination $Build

