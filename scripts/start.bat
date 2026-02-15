@echo off
REM Flux AI Showroom - Quick Start Script (Windows)

echo ================================
echo Flux AI Showroom - Quick Start
echo ================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed
    echo Install from: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js detected
node --version
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Installation failed
    pause
    exit /b 1
)

echo Dependencies installed successfully
echo.

REM Start development server
echo Starting development server...
echo Your showroom will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
