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

# ── SZAFY ELEKTRYCZNE — hw-001..004 (seria 2021) ─────────────────────
Copy-Item "$src\20210403_144633.jpg" "$dest\hw-001.jpg" -Force; Write-Host "  hw-001.jpg"
Copy-Item "$src\20210403_144637.jpg" "$dest\hw-002.jpg" -Force; Write-Host "  hw-002.jpg"
Copy-Item "$src\20210403_144639.jpg" "$dest\hw-003.jpg" -Force; Write-Host "  hw-003.jpg"
Copy-Item "$src\20210403_144641.jpg" "$dest\hw-004.jpg" -Force; Write-Host "  hw-004.jpg"

# ── SZAFA NOWOCZESNA — hw-005 (IMG_3460) ─────────────────────────────
Copy-Item "$src\IMG_3460.JPG" "$dest\hw-005.jpg" -Force; Write-Host "  hw-005.jpg"

# ── SERWIS STARYCH STEROWAŃ ───────────────────────────────────────────
Copy-Item "$src\WhatsApp Image 2026-06-12 at 12.57.33.jpeg" "$dest\hw-006.jpg" -Force; Write-Host "  hw-006.jpg (stare PLC)"
Copy-Item "$src\WhatsApp Image 2026-06-12 at 12.58.08.jpeg" "$dest\hw-007.jpg" -Force; Write-Host "  hw-007.jpg (stary pulpit)"
Copy-Item "$src\WhatsApp Image 2026-06-12 at 12.58.27.jpeg" "$dest\hw-008.jpg" -Force; Write-Host "  hw-008.jpg (stare naped)"
Copy-Item "$src\WhatsApp Image 2026-06-12 at 12.59.32.jpeg" "$dest\hw-009.jpg" -Force; Write-Host "  hw-009.jpg (siec przem.)"
Copy-Item "$src\WhatsApp Image 2026-06-12 at 12.59.55.jpeg" "$dest\hw-010.jpg" -Force; Write-Host "  hw-010.jpg (serwozmacniacz)"
Copy-Item "$src\WhatsApp Image 2026-06-12 at 13.00.30.jpeg" "$dest\hw-011.jpg" -Force; Write-Host "  hw-011.jpg (regulator)"
Copy-Item "$src\WhatsApp Image 2026-06-12 at 13.01.58.jpeg" "$dest\hw-012.jpg" -Force; Write-Host "  hw-012.jpg (plyta elekt.)"

# ── HMI / WIZUALIZACJA ────────────────────────────────────────────────
Copy-Item "$src\1.PNG"                                                   "$dest\hmi-001.png" -Force; Write-Host "  hmi-001.png"
Copy-Item "$src\2.PNG"                                                   "$dest\hmi-002.png" -Force; Write-Host "  hmi-002.png"
Copy-Item "$src\10.PNG"                                                  "$dest\hmi-003.png" -Force; Write-Host "  hmi-003.png"
Copy-Item "$src\WhatsApp Image 2026-06-12 at 12.57.53.jpeg"             "$dest\hmi-004.jpg" -Force; Write-Host "  hmi-004.jpg (panel HMI)"

# ── PROGRAMOWANIE ─────────────────────────────────────────────────────
Copy-Item "$src\PlcDesigner_Dc92FQqHmt.png"                             "$dest\code-001.png" -Force; Write-Host "  code-001.png (PLCDesigner)"
Copy-Item "$src\PlcDesigner_mAjJn1IBgT.png"                             "$dest\code-002.png" -Force; Write-Host "  code-002.png (PLCDesigner)"
Copy-Item "$src\Siemens.Automation.Portal_HY8G7cYgWj.png"               "$dest\code-003.png" -Force; Write-Host "  code-003.png (TIA Portal)"
Copy-Item "$src\Siemens.Automation.Portal_A2FWflSTTg.png"               "$dest\code-004.png" -Force; Write-Host "  code-004.png (TIA Portal SCL)"

Write-Host ""
Write-Host "Gotowe! Liczba plikow: $((Get-ChildItem $dest).Count)"
