#!/bin/bash

# Fast Docker Compose build script
set -e

echo "🚀 Starting optimized Docker Compose build..."

# Enable Docker BuildKit for faster builds
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1
export BUILDKIT_PROGRESS=plain

# Set build arguments for maximum speed
export BUILDKIT_INLINE_CACHE=1

echo "📦 Building with Docker Compose..."
time docker compose -f docker-compose.prod.yml up -d --build

echo "✅ Build completed successfully!"
echo "🌐 Application should be running at http://localhost:3000"
