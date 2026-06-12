# ─────────────────────────────────────────────────────────────────────
# setup-gallery.ps1  —  Kopiuje i przemianowuje zdjecia do gallery/
# Uruchom z folderu tu-automation-website:
#   .\setup-gallery.ps1
# ─────────────────────────────────────────────────────────────────────

$src  = "C:\Users\t_urb\Pictures\foto\Wybrane_zdjecia"
$dest = "$PSScriptRoot\gallery"

# Wyczysc stary folder i stworz nowy
if (Test-Path $dest) { Remove-Item "$dest\*" -Force }
New-Item -ItemType Directory -Force -Path $dest | Out-Null

Write-Host "Kopiowanie zdjec..."

# ── SZAFY ELEKTRYCZNE 2021 — hw-001..016 ─────────────────────────────
Copy-Item "$src\20210403_144633.jpg" "$dest\hw-001.jpg" -Force; Write-Host "  hw-001.jpg"
Copy-Item "$src\20210403_144637.jpg" "$dest\hw-002.jpg" -Force; Write-Host "  hw-002.jpg"
Copy-Item "$src\20210403_144639.jpg" "$dest\hw-003.jpg" -Force; Write-Host "  hw-003.jpg"
Copy-Item "$src\20210403_144641.jpg" "$dest\hw-004.jpg" -Force; Write-Host "  hw-004.jpg"
Copy-Item "$src\20210403_144649.jpg" "$dest\hw-005.jpg" -Force; Write-Host "  hw-005.jpg"
Copy-Item "$src\20210403_144704.jpg" "$dest\hw-006.jpg" -Force; Write-Host "  hw-006.jpg"
Copy-Item "$src\20210403_144709.jpg" "$dest\hw-007.jpg" -Force; Write-Host "  hw-007.jpg"
Copy-Item "$src\20210403_144723.jpg" "$dest\hw-008.jpg" -Force; Write-Host "  hw-008.jpg"
Copy-Item "$src\20210403_144739.jpg" "$dest\hw-009.jpg" -Force; Write-Host "  hw-009.jpg"
Copy-Item "$src\20210403_145001.jpg" "$dest\hw-010.jpg" -Force; Write-Host "  hw-010.jpg"
Copy-Item "$src\20210403_145008.jpg" "$dest\hw-011.jpg" -Force; Write-Host "  hw-011.jpg"
Copy-Item "$src\20210403_145016.jpg" "$dest\hw-012.jpg" -Force; Write-Host "  hw-012.jpg"
Copy-Item "$src\20210403_145021.jpg" "$dest\hw-013.jpg" -Force; Write-Host "  hw-013.jpg"
Copy-Item "$src\20210403_145025.jpg" "$dest\hw-014.jpg" -Force; Write-Host "  hw-014.jpg"
Copy-Item "$src\20210403_145029.jpg" "$dest\hw-015.jpg" -Force; Write-Host "  hw-015.jpg"
Copy-Item "$src\20210403_145041.jpg" "$dest\hw-016.jpg" -Force; Write-Host "  hw-016.jpg"

# ── SZAFY ELEKTRYCZNE 2016 — hw-017..021 ─────────────────────────────
Copy-Item "$src\IMG_2539.JPG" "$dest\hw-017.jpg" -Force; Write-Host "  hw-017.jpg"
Copy-Item "$src\IMG_2540.JPG" "$dest\hw-018.jpg" -Force; Write-Host "  hw-018.jpg"
Copy-Item "$src\IMG_2541.JPG" "$dest\hw-019.jpg" -Force; Write-Host "  hw-019.jpg"
Copy-Item "$src\IMG_2542.JPG" "$dest\hw-020.jpg" -Force; Write-Host "  hw-020.jpg"
Copy-Item "$src\IMG_2543.JPG" "$dest\hw-021.jpg" -Force; Write-Host "  hw-021.jpg"

# ── SERWIS / MODERNIZACJA — svc-001..004 ─────────────────────────────
Copy-Item "$src\starys5wymiana na S7-1200.jpeg"                                          "$dest\svc-001.jpg" -Force; Write-Host "  svc-001.jpg (stary S5 -> wymiana)"
Copy-Item "$src\staresterowanewymienionena hmitp1500tpsiemens.jpeg"                     "$dest\svc-002.jpg" -Force; Write-Host "  svc-002.jpg (stare sterowania -> HMI)"
Copy-Item "$src\staryniedzaialajacyhmiwymiana na siemensktp9001do1bezdanychze staregoaniplc.jpeg" "$dest\svc-003.jpg" -Force; Write-Host "  svc-003.jpg (stary HMI -> wymiana)"
Copy-Item "$src\regulatorystarewymianananowe.jpeg"                                       "$dest\svc-004.jpg" -Force; Write-Host "  svc-004.jpg (stare regulatory -> nowe)"

# ── HMI / WIZUALIZACJA — hmi-001..003 ───────────────────────────────
Copy-Item "$src\1.PNG"  "$dest\hmi-001.png" -Force; Write-Host "  hmi-001.png"
Copy-Item "$src\2.PNG"  "$dest\hmi-002.png" -Force; Write-Host "  hmi-002.png"
Copy-Item "$src\10.PNG" "$dest\hmi-003.png" -Force; Write-Host "  hmi-003.png"

# ── PROGRAMOWANIE — code-001..005 ────────────────────────────────────
Copy-Item "$src\nowyprogramdos7-300.JPG"                   "$dest\code-001.jpg" -Force; Write-Host "  code-001.jpg (nowy program S7-300)"
Copy-Item "$src\PlcDesigner_Dc92FQqHmt.png"                "$dest\code-002.png" -Force; Write-Host "  code-002.png (PLCDesigner)"
Copy-Item "$src\PlcDesigner_mAjJn1IBgT.png"                "$dest\code-003.png" -Force; Write-Host "  code-003.png (PLCDesigner)"
Copy-Item "$src\Siemens.Automation.Portal_HY8G7cYgWj.png"  "$dest\code-004.png" -Force; Write-Host "  code-004.png (TIA Portal)"
Copy-Item "$src\Siemens.Automation.Portal_A2FWflSTTg.png"  "$dest\code-005.png" -Force; Write-Host "  code-005.png (TIA Portal SCL)"

Write-Host ""
Write-Host "Gotowe! Liczba plikow: $((Get-ChildItem $dest).Count)"
