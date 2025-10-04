/**
 * Request logging middleware
 */
import morgan from 'morgan';
import { config } from '../config/env';

/**
 * Get morgan middleware instance
 */
export function getLoggerMiddleware() {
  if (config.nodeEnv === 'development') {
    return morgan('dev');
  }

  // Production logging format
  return morgan('combined');
}
