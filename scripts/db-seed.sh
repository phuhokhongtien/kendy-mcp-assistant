#!/bin/bash
# Database seed script

set -e

echo "Seeding database..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL environment variable is not set"
  echo "Please set it in your .env file or environment"
  exit 1
fi

# Run Prisma seed
npx prisma db seed

echo "Database seeding completed successfully!"
