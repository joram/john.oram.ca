#!/bin/bash

# Production deployment script with memory optimization
echo "🚀 Starting production deployment..."

# Build and deploy using the production docker-compose
echo "📦 Building production image..."
docker-compose -f docker-compose.prod.yml build --no-cache

echo "🔄 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down

echo "🚀 Starting production containers..."
docker-compose -f docker-compose.prod.yml up -d

echo "✅ Deployment complete!"
echo "🌐 Application should be available at http://localhost:5000"
echo "💚 Health check: http://localhost:5000/health"

# Show container status
echo "📊 Container status:"
docker-compose -f docker-compose.prod.yml ps
