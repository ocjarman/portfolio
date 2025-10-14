#!/bin/bash

# Exit on error
set -e

echo "🧹 Cleaning install..."
rm -rf node_modules
rm -f package-lock.json

echo "📦 Installing dependencies..."
npm install

echo "✨ Checking formatting..."
npm run format:check

echo "🔍 Running ESLint..."
npm run lint

echo "📝 Type checking..."
npm run type-check

echo "🏗️ Building..."
npm run build

echo "✅ All checks passed!"
