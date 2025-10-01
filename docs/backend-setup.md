# Backend Setup Guide

This guide explains how to set up and run the Kendy MCP Assistant backend services.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Quick Start with Docker](#quick-start-with-docker)
- [Manual Setup](#manual-setup)
- [Database Management](#database-management)
- [Running the Backend](#running-the-backend)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

## Overview

The Kendy MCP Assistant backend is built with:

- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL 16
- **Cache**: Redis 7
- **ORM**: Prisma
- **Containerization**: Docker & Docker Compose

### Architecture

```
backend/
├── api/              # API routes and controllers
│   ├── health.ts     # Health check endpoint
│   └── index.ts      # Route aggregation
├── config/           # Configuration files
│   ├── database.ts   # Database connection
│   ├── redis.ts      # Redis connection
│   └── env.ts        # Environment variables
├── middleware/       # Express middleware
│   ├── errorHandler.ts
│   └── logger.ts
├── models/           # Data models (future)
├── services/         # Business logic (future)
├── utils/            # Utility functions (future)
└── server.ts         # Main server entry point
```

## Prerequisites

### Required

- Node.js 18+ and npm 9+
- Docker 20+ and Docker Compose 2+ (recommended for local development)

### Optional (for manual setup)

- PostgreSQL 16+
- Redis 7+

## Quick Start with Docker

The easiest way to get started is using Docker Compose, which automatically sets up PostgreSQL and Redis.

### 1. Clone and Install

```bash
git clone https://github.com/phuhokhongtien/kendy-mcp-assistant.git
cd kendy-mcp-assistant
npm install
```

### 2. Run Docker Setup Script

```bash
npm run docker:setup
```

This script will:
- Create `.env` file from `.env.example` (if not exists)
- Start PostgreSQL and Redis containers
- Run database migrations
- Set up the database schema

### 3. Start the Backend Server

```bash
npm run dev:backend
```

The server will start on http://localhost:3000

### 4. Verify Setup

Check the health endpoint:

```bash
curl http://localhost:3000/api/v1/health
```

Expected response:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-XX...",
  "services": {
    "database": "connected",
    "redis": "connected"
  },
  "version": "0.1.0"
}
```

## Manual Setup

If you prefer to set up services manually without Docker:

### 1. Install PostgreSQL and Redis

Install PostgreSQL 16 and Redis 7 on your system.

### 2. Create Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database and user
CREATE DATABASE kendy_mcp;
CREATE USER kendy WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE kendy_mcp TO kendy;
```

### 3. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and update the connection strings:

```env
DATABASE_URL=postgresql://kendy:your_password@localhost:5432/kendy_mcp
REDIS_URL=redis://localhost:6379
```

### 4. Run Migrations

```bash
npm run prisma:migrate
```

### 5. Start the Server

```bash
npm run dev:backend
```

## Database Management

### Migrations

Create a new migration:

```bash
npm run prisma:migrate
```

This will:
1. Create a new migration based on schema changes
2. Apply the migration to your database
3. Regenerate Prisma Client

Apply migrations in production:

```bash
npm run db:migrate
```

### Seed Data

Populate the database with initial data:

```bash
npm run db:seed
```

### Prisma Studio

Open Prisma Studio to view and edit data:

```bash
npm run prisma:studio
```

This opens a web interface at http://localhost:5555

### Schema Changes

1. Edit `prisma/schema.prisma`
2. Run `npm run prisma:migrate` to create and apply migration
3. The Prisma Client will be automatically regenerated

## Running the Backend

### Development Mode

```bash
npm run dev:backend
```

Features:
- Hot reload on file changes
- Detailed logging
- Source maps for debugging

### Production Mode

```bash
# Build the application
npm run build

# Start the server
npm run start:backend
```

### Docker Commands

```bash
# Start all services
npm run docker:up

# Stop all services
npm run docker:down

# View logs
npm run docker:logs

# View logs for specific service
docker-compose logs -f postgres
docker-compose logs -f redis
```

## API Documentation

### Available Endpoints

#### Root Endpoint

```
GET /
```

Returns basic API information.

#### API Root

```
GET /api/v1
```

Returns API version and available endpoints.

#### Health Check

```
GET /api/v1/health
```

Returns service health status.

Response:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "services": {
    "database": "connected",
    "redis": "connected"
  },
  "version": "0.1.0"
}
```

### Response Formats

All API responses follow this structure:

**Success:**

```json
{
  "status": "success",
  "data": { ... }
}
```

**Error:**

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Error description"
}
```

### Authentication

Authentication endpoints will be added in future updates.

## Troubleshooting

### Database Connection Issues

**Problem**: Cannot connect to PostgreSQL

**Solutions**:

1. Check if PostgreSQL is running:
   ```bash
   docker-compose ps postgres
   ```

2. Verify connection string in `.env`:
   ```env
   DATABASE_URL=postgresql://kendy:kendy_dev_password@localhost:5432/kendy_mcp
   ```

3. Check PostgreSQL logs:
   ```bash
   docker-compose logs postgres
   ```

### Redis Connection Issues

**Problem**: Cannot connect to Redis

**Solutions**:

1. Check if Redis is running:
   ```bash
   docker-compose ps redis
   ```

2. Test Redis connection:
   ```bash
   docker exec -it kendy-redis redis-cli ping
   ```

3. Check Redis logs:
   ```bash
   docker-compose logs redis
   ```

### Migration Errors

**Problem**: Migration fails

**Solutions**:

1. Reset the database (development only):
   ```bash
   npx prisma migrate reset
   ```

2. Check migration status:
   ```bash
   npx prisma migrate status
   ```

3. Manually apply migrations:
   ```bash
   npx prisma migrate deploy
   ```

### Port Already in Use

**Problem**: Port 3000, 5432, or 6379 already in use

**Solutions**:

1. Change ports in `.env`:
   ```env
   PORT=3001
   ```

2. Or change ports in `docker-compose.yml`:
   ```yaml
   ports:
     - '5433:5432'  # PostgreSQL
     - '6380:6379'  # Redis
   ```

### Docker Issues

**Problem**: Docker containers not starting

**Solutions**:

1. Check Docker is running:
   ```bash
   docker ps
   ```

2. Remove old containers and volumes:
   ```bash
   docker-compose down -v
   npm run docker:setup
   ```

3. Rebuild containers:
   ```bash
   docker-compose build --no-cache
   docker-compose up -d
   ```

### Build Errors

**Problem**: TypeScript compilation errors

**Solutions**:

1. Clean and rebuild:
   ```bash
   npm run clean
   npm run build
   ```

2. Check TypeScript version:
   ```bash
   npx tsc --version
   ```

3. Regenerate Prisma Client:
   ```bash
   npm run prisma:generate
   ```

## Environment Variables

All available environment variables are documented in `.env.example`. Key variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment (development/production) | `development` |
| `PORT` | Server port | `3000` |
| `DATABASE_URL` | PostgreSQL connection string | Required |
| `REDIS_URL` | Redis connection string | `redis://localhost:6379` |
| `API_PREFIX` | API route prefix | `/api` |
| `API_VERSION` | API version | `v1` |
| `LOG_LEVEL` | Logging level | `info` |
| `CORS_ORIGIN` | CORS allowed origins | `*` |

## Security Considerations

### Development

- Use `.env` file for local configuration
- Never commit `.env` to version control
- Default passwords are for development only

### Production

- Use strong passwords for database and Redis
- Set `JWT_SECRET` to a secure random value
- Configure `CORS_ORIGIN` to specific domains
- Enable HTTPS
- Use environment-specific configuration
- Implement rate limiting
- Regular security updates

## Performance Tips

1. **Database Connection Pooling**: Prisma handles this automatically
2. **Redis Caching**: Use Redis for frequently accessed data
3. **Compression**: Enabled by default for API responses
4. **Production Build**: Always use `npm run build` for production

## Next Steps

- [API Development Guide](./api/README.md)
- [Testing Guide](./guides/testing.md)
- [Deployment Guide](./guides/deployment.md)
- [Contributing Guide](../CONTRIBUTING.md)

## Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Redis Documentation](https://redis.io/documentation)
- [Docker Documentation](https://docs.docker.com/)

## Support

If you encounter issues not covered in this guide:

- Check [GitHub Issues](https://github.com/phuhokhongtien/kendy-mcp-assistant/issues)
- Create a new issue with detailed information
- Join our community discussions
