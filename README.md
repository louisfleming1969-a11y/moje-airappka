# Moje AirAppka — Local Development

Quick commands (PowerShell):

```powershell
cd "C:\Users\Administrator\Desktop\moje-airappka.com"

# Recommended: use Turbopack for faster HMR
npm run dev:turbo

# fallback: standard dev
npm run dev
```

PowerShell tips:
- Remove build cache: `Remove-Item -Recurse -Force .next`
- If `Remove-Item` complains about arguments, use: `cmd /c rd /s /q .next`
- Disable Next telemetry for the session:
  `$env:NEXT_TELEMETRY_DISABLED='1'`
- Give Node more memory (optional):
  `$env:NODE_OPTIONS='--max_old_space_size=4096'`

Performance tips:
- Exclude the project folder from Windows Defender/antivirus scanning.
- Use WSL2 (Linux filesystem) for better Node performance on Windows.
- Close heavy apps and disable unnecessary VS Code extensions while compiling.
