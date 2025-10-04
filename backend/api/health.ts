/**
 * Health check endpoint
 */
import { Router, Response } from 'express';
import { checkDatabaseConnection } from '../config/database';
import { checkRedisConnection } from '../config/redis';

const router = Router();

/**
 * GET /health
 * Health check endpoint to verify service status
 */
router.get('/', async (_req, res: Response) => {
  try {
    const dbStatus = await checkDatabaseConnection();
    const redisStatus = await checkRedisConnection();

    const status = dbStatus && redisStatus ? 'healthy' : 'degraded';

    res.status(status === 'healthy' ? 200 : 503).json({
      status,
      timestamp: new Date().toISOString(),
      services: {
        database: dbStatus ? 'connected' : 'disconnected',
        redis: redisStatus ? 'connected' : 'disconnected',
      },
      version: '0.1.0',
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

export default router;
