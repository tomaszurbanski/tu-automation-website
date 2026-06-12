# ─────────────────────────────────────────────────────────────────────
# setup-gallery.ps1  —  Kopiuje i przemianowuje zdjecia do gallery/
# Uruchom z folderu tu-automation-website:
#   .\setup-gallery.ps1
# ─────────────────────────────────────────────────────────────────────

$src  = "C:\Users\t_urb\Pictures\foto"
$dest = "$PSScriptRoot\gallery"

if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }

# ── SZAFY ELEKTRYCZNE (hw-001..010) ──────────────────────────────────
$hwPhotos = @(
  "20210403_144633.jpg",
  "20210403_144637.jpg",
  "20210403_144639.jpg",
  "20210403_144641.jpg",
  "20210403_144644.jpg",
  "20210403_144649.jpg",
  "20210403_144654.jpg",
  "20210403_144700.jpg",
  "20210403_144704.jpg",
  "20210403_144709.jpg"
)

$i = 1
foreach ($f in $hwPhotos) {
  $name = "hw-{0:D3}.jpg" -f $i
  Copy-Item "$src\$f" "$dest\$name" -Force
  Write-Host "  Skopiowano: $f  ->  $name"
  $i++
}

# ── HMI / SCADA (hmi-001..003) ───────────────────────────────────────
$hmiPhotos = @("1.PNG", "2.PNG", "3.PNG")
$i = 1
foreach ($f in $hmiPhotos) {
  $name = "hmi-{0:D3}.png" -f $i
  Copy-Item "$src\$f" "$dest\$name" -Force
  Write-Host "  Skopiowano: $f  ->  $name"
  $i++
}

# ── PROGRAMOWANIE (code-001, code-002) ───────────────────────────────
Copy-Item "$src\Siemens.Automation.Portal_A2FWflSTTg.png" "$dest\code-001.png" -Force
Write-Host "  Skopiowano: Siemens TIA Portal  ->  code-001.png"

# code-002 — opcjonalny drugi screenshot kodu
# Copy-Item "$src\inny_plik.png" "$dest\code-002.png" -Force

Write-Host ""
Write-Host "Gotowe! Zdjecia w: $dest"
Write-Host "Liczba plikow: $((Get-ChildItem $dest).Count)"
