#!/bin/bash

# Flux AI Showroom - Quick Start Script
# This script sets up and runs your showroom in one command

echo "🚀 Flux AI Showroom - Quick Start"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Install from: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js detected: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed"
    exit 1
fi

echo "✓ Dependencies installed"
echo ""

# Start development server
echo "🎨 Starting development server..."
echo "Your showroom will open at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
