
Bike Time Pro - Desktop (Electron) scaffold
==========================================

This package contains a ready-to-run Electron wrapper for the Bike Time Pro web app (pure HTML/JS).

What is included:
- build/                 -> Web files (index.html, styles.css, app.js)
- electron/              -> Electron main and preload script, icon.ico
- package.json           -> scripts and electron-builder config
- .github/workflows/     -> CI workflow to build .exe on Windows runner (optional)

How to build locally (Windows):
1. Install Node.js 20+ and Git.
2. Open PowerShell / CMD at project root.
3. Run: npm install
4. (Optional test) Run app: npm run electron:start
5. Build installer/exe: npm run electron:build
   Result will be in the 'dist' folder.

Notes:
- The scaffold uses electron-builder to create a Windows installer (.exe / NSIS).
- If you want automatic builds on GitHub Actions, enable the workflow in .github/workflows.
