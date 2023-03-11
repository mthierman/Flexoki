$Repo = $PSScriptRoot
$Build = Join-Path -Path $Repo -ChildPath "build"
$ThemesFrom = Join-Path -Path $Repo -ChildPath "themes"
$ThemesTo = Join-Path -Path $Build -ChildPath "themes"
$PackageFrom = Join-Path -Path $Repo -ChildPath "package.json"
$PackageTo = Join-Path -Path $Build -ChildPath "package.json"
$PackageNlsFrom = Join-Path -Path $Repo -ChildPath "package.nls.build.json"
$PackageNlsTo = Join-Path -Path $Build -ChildPath "package.nls.json"

if (!(Test-Path -Path $Build)) { New-Item -ItemType Directory $Build }

if (Test-Path -Path $PackageTo) { Remove-Item -Path $PackageTo }
Copy-Item -Path $PackageFrom -Destination $Build

if (Test-Path -Path $PackageNlsTo) { Remove-Item -Path $PackageNlsTo }
Copy-Item -Path $PackageNlsFrom -Destination $Build\package.nls.json

if (Test-Path -Path $ThemesTo) { Remove-Item -Path $ThemesTo -Recurse }
Copy-Item -Path $ThemesFrom -Destination $Build -Recurse
