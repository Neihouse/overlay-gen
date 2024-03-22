#!/bin/bash

# Check if package.json exists in the current directory
if [ -f "package.json" ]; then
  # Check if the scripts section contains "dev"
  if grep -q "\"dev\":" "package.json"; then
    echo "Starting Next.js development server..."
    npm run dev
  else
    echo "Error: The script 'dev' is not defined in package.json."
  fi
else
  echo "Error: package.json not found. Are you in the right directory?"
fi