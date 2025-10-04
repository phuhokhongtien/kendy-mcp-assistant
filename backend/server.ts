/**
 * Kendy MCP Assistant Backend Server
 * Main entry point for the backend services
 */
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { config, validateConfig } from './config/env';
import { getLoggerMiddleware } from './middleware/logger';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { disconnectDatabase } from './config/database';
import { disconnectRedis } from './config/redis';
import apiRoutes from './api';

/**
 * Create and configure Express application
 */
function createApp(): Application {
  const app = express();

  // Security middleware
  app.use(helmet());

  // CORS configuration
  app.use(
    cors({
      origin: config.corsOrigin,
      credentials: config.corsCredentials,
    })
  );

  // Request parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Compression
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  app.use(compression());

  // Logging
  app.use(getLoggerMiddleware());

  // API routes
  app.use(`${config.apiPrefix}/${config.apiVersion}`, apiRoutes);

  // Root endpoint
  app.get('/', (_req, res) => {
    res.json({
      name: 'Kendy MCP Assistant Backend',
      version: '0.1.0',
      status: 'running',
      api: `${config.apiPrefix}/${config.apiVersion}`,
    });
  });

  // Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

/**
 * Start the server
 */
function startServer(): void {
  try {
    // Validate configuration
    validateConfig();

    // Create Express app
    const app = createApp();

    // Start server
    const server = app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log('Kendy MCP Assistant Backend v0.1.0');
      // eslint-disable-next-line no-console
      console.log(`Server running on http://${config.host}:${config.port}`);
      // eslint-disable-next-line no-console
      console.log(
        `API available at http://${config.host}:${config.port}${config.apiPrefix}/${config.apiVersion}`
      );
      // eslint-disable-next-line no-console
      console.log(`Environment: ${config.nodeEnv}`);
    });

    // Graceful shutdown
    const gracefulShutdown = (signal: string): void => {
      // eslint-disable-next-line no-console
      console.log(`\n${signal} received. Starting graceful shutdown...`);

      server.close(() => {
        // eslint-disable-next-line no-console
        console.log('HTTP server closed');

        void Promise.all([disconnectDatabase(), disconnectRedis()])
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Database and Redis connections closed');
            process.exit(0);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Error during shutdown:', error);
            process.exit(1);
          });
      });

      // Force shutdown after 10 seconds
      setTimeout(() => {
        // eslint-disable-next-line no-console
        console.error('Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Start server if this file is run directly
if (require.main === module) {
  startServer();
}

export { createApp, startServer };
