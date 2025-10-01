#!/bin/bash
# Docker setup script for local development

set -e

echo "Setting up Docker environment for Kendy MCP Assistant..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
  echo "Error: Docker is not installed"
  echo "Please install Docker from https://docs.docker.com/get-docker/"
  exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
  echo "Error: Docker Compose is not installed"
  echo "Please install Docker Compose from https://docs.docker.com/compose/install/"
  exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file from .env.example..."
  cp .env.example .env
  
  # Update DATABASE_URL for Docker
  echo "" >> .env
  echo "# Docker configuration (auto-generated)" >> .env
  echo "DATABASE_URL=postgresql://kendy:kendy_dev_password@localhost:5432/kendy_mcp" >> .env
  echo "REDIS_URL=redis://localhost:6379" >> .env
fi

# Start Docker containers
echo "Starting Docker containers..."
docker-compose up -d postgres redis

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
sleep 5

# Run migrations
echo "Running database migrations..."
npx prisma migrate dev --name init

echo ""
echo "✅ Docker setup completed successfully!"
echo ""
echo "Services running:"
echo "  - PostgreSQL: localhost:5432"
echo "  - Redis: localhost:6379"
echo ""
echo "To start the backend server, run: npm run dev:backend"
echo "To stop the containers, run: docker-compose down"
echo "To view logs, run: docker-compose logs -f"
