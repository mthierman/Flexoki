if (!(Test-Path -Path "build")) { New-Item -ItemType Directory "build" }

Copy-Item -Path "package.json" -Destination "build/package.json" -Force
Copy-Item -Path "package.nls.json" -Destination "build/package.nls.json" -Force

Push-Location
Set-Location build
New-Item -ItemType SymbolicLink -Path "themes" -Target ".\..\themes" -Force
Pop-Location
