/**
 * API routes index
 */
import { Router } from 'express';
import healthRouter from './health';

const router = Router();

// Register routes
router.use('/health', healthRouter);

// Root API endpoint
router.get('/', (_req, res) => {
  res.json({
    name: 'Kendy MCP Assistant API',
    version: '0.1.0',
    status: 'running',
    endpoints: {
      health: '/api/v1/health',
    },
  });
});

export default router;
