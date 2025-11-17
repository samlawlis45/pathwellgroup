#!/bin/bash

# Kill any existing Next.js processes
pkill -9 -f "next dev" 2>/dev/null || true

# Clear caches
rm -rf .next node_modules/.cache .turbo

# Start dev server
echo "Starting Next.js dev server..."
npm run dev

