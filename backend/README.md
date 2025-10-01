# Backend Directory

This directory contains the backend services and APIs for Kendy MCP Assistant.

## Overview

The backend is built with:
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL 16 with Prisma ORM
- **Cache**: Redis 7
- **Containerization**: Docker & Docker Compose

## Quick Start

### Using Docker (Recommended)

1. **Setup Docker environment**:
   ```bash
   npm run docker:setup
   ```
   This will start PostgreSQL and Redis containers and run database migrations.

2. **Start the backend**:
   ```bash
   npm run dev:backend
   ```

3. **Verify it's running**:
   ```bash
   curl http://localhost:3000/api/v1/health
   ```

### Manual Setup

If you prefer to install PostgreSQL and Redis manually, see [Backend Setup Guide](../docs/backend-setup.md).

## Structure

```
backend/
├── api/             # API routes and controllers
│   ├── health.ts    # Health check endpoint
│   └── index.ts     # Route aggregation
├── config/          # Configuration files
│   ├── database.ts  # Prisma database connection
│   ├── redis.ts     # Redis connection
│   └── env.ts       # Environment variables
├── middleware/      # Express middleware
│   ├── errorHandler.ts  # Error handling
│   └── logger.ts        # Request logging
├── models/          # Data models (future)
├── services/        # Business logic (future)
├── utils/           # Utility functions (future)
├── tests/           # Backend tests
└── server.ts        # Main server entry point
```

## Available Scripts

From the project root:

- `npm run dev:backend` - Start backend in development mode with hot reload
- `npm run start:backend` - Start backend in production mode
- `npm run build` - Build backend and generate Prisma client
- `npm run prisma:migrate` - Create and apply database migrations
- `npm run prisma:studio` - Open Prisma Studio (database GUI)
- `npm run db:seed` - Seed database with initial data
- `npm run docker:setup` - Setup Docker environment
- `npm run docker:up` - Start Docker services
- `npm run docker:down` - Stop Docker services

## API Endpoints

### Root Endpoint
```
GET /
```
Returns basic backend information.

### API Root
```
GET /api/v1
```
Returns API version and available endpoints.

### Health Check
```
GET /api/v1/health
```
Returns service health status including database and Redis connection status.

Response example:
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

## Development

### Adding New Routes

1. Create a new route file in `backend/api/`:
   ```typescript
   import { Router } from 'express';
   
   const router = Router();
   
   router.get('/', (req, res) => {
     res.json({ message: 'Hello' });
   });
   
   export default router;
   ```

2. Register the route in `backend/api/index.ts`:
   ```typescript
   import myRoute from './myRoute';
   router.use('/my-route', myRoute);
   ```

### Database Changes

1. Update `prisma/schema.prisma` with your model changes
2. Run `npm run prisma:migrate` to create and apply migration
3. Prisma Client will be automatically regenerated

### Environment Variables

Configure in `.env` file. See [Backend Setup Guide](../docs/backend-setup.md) for details.

## Testing

Run backend tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Docker Services

### PostgreSQL
- **Port**: 5432
- **User**: kendy
- **Password**: kendy_dev_password (development only)
- **Database**: kendy_mcp

### Redis
- **Port**: 6379

## Technology Stack

- **Node.js**: v18+
- **Express**: Web framework
- **TypeScript**: Type-safe JavaScript
- **Prisma**: Modern ORM for PostgreSQL
- **Redis/ioredis**: Caching and session store
- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Morgan**: HTTP request logger
- **Compression**: Response compression

## Guidelines

- Follow RESTful API design principles
- Implement proper error handling
- Use environment variables for configuration
- Write comprehensive API documentation
- Implement rate limiting and security best practices
- Add tests for all new endpoints
- Use Prisma migrations for database changes

## Documentation

For detailed setup instructions, troubleshooting, and advanced usage:
- [Backend Setup Guide](../docs/backend-setup.md)
- [API Documentation](../docs/api/README.md)
- [Architecture Overview](../docs/architecture/overview.md)

## Support

If you encounter issues:
- Check the [Backend Setup Guide](../docs/backend-setup.md) troubleshooting section
- Review [GitHub Issues](https://github.com/phuhokhongtien/kendy-mcp-assistant/issues)
- Create a new issue with detailed information

