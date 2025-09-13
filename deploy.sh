#!/bin/bash

# Enable Docker BuildKit for better build performance and logging
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1

# Set buildkit progress output to show build logs
export BUILDKIT_PROGRESS=plain

echo "🚀 Starting deployment with BuildKit builder service logs..."

# Build and deploy with buildkit logs
docker-compose -f docker-compose.prod.yml build --progress=plain --no-cache

echo "📦 Build completed. Starting services..."

# Start services
docker-compose -f docker-compose.prod.yml up -d

echo "✅ Deployment completed!"
echo "📊 To view buildkit builder logs:"
echo "   docker-compose -f docker-compose.prod.yml logs --tail=100 web"
echo ""
echo "🔍 To view runtime logs:"
echo "   docker-compose -f docker-compose.prod.yml logs -f web"

