#!/bin/bash
# Database migration script

set -e

echo "Running database migrations..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL environment variable is not set"
  echo "Please set it in your .env file or environment"
  exit 1
fi

# Run Prisma migrations
npx prisma migrate deploy

echo "Migrations completed successfully!"
