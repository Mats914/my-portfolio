# Script to fix common issues and run the project
# Run this in PowerShell from the project folder

Write-Host "Fixing potential issues..." -ForegroundColor Cyan

# Reinstall esbuild (fixes EPERM)
Write-Host "Reinstalling esbuild..." -ForegroundColor Yellow
if (Test-Path "node_modules\esbuild") {
    node ./node_modules/esbuild/install.js 2>$null
}

# Try running dev server
Write-Host "Starting dev server..." -ForegroundColor Green
npm run dev
