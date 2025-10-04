/**
 * Environment configuration
 */
import dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env file
dotenv.config({ path: resolve(__dirname, '../../.env') });

export const config = {
  // Server
  nodeEnv: process.env['NODE_ENV'] || 'development',
  port: parseInt(process.env['PORT'] || '3000', 10),
  host: process.env['HOST'] || 'localhost',

  // API
  apiVersion: process.env['API_VERSION'] || 'v1',
  apiPrefix: process.env['API_PREFIX'] || '/api',

  // Database
  databaseUrl: process.env['DATABASE_URL'] || '',

  // Redis
  redisUrl: process.env['REDIS_URL'] || 'redis://localhost:6379',

  // Logging
  logLevel: process.env['LOG_LEVEL'] || 'info',
  logFormat: process.env['LOG_FORMAT'] || 'json',

  // CORS
  corsOrigin: process.env['CORS_ORIGIN'] || '*',
  corsCredentials: process.env['CORS_CREDENTIALS'] === 'true',

  // Security
  jwtSecret: process.env['JWT_SECRET'] || 'change-me-in-production',
  jwtExpiration: process.env['JWT_EXPIRATION'] || '24h',

  // Rate Limiting
  rateLimitWindowMs: parseInt(process.env['RATE_LIMIT_WINDOW_MS'] || '900000', 10),
  rateLimitMaxRequests: parseInt(process.env['RATE_LIMIT_MAX_REQUESTS'] || '100', 10),

  // Development
  debug: process.env['DEBUG'] === 'true',
};

/**
 * Validate required environment variables
 */
export function validateConfig(): void {
  const required = ['DATABASE_URL'];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.warn(`Warning: Missing environment variables: ${missing.join(', ')}`);
    console.warn('The application may not work correctly without these variables.');
  }
}
