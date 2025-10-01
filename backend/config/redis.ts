/**
 * Redis configuration
 */
import Redis from 'ioredis';

let redisClient: Redis | null = null;

/**
 * Get Redis client instance (singleton pattern)
 */
export function getRedisClient(): Redis {
  if (!redisClient) {
    const redisUrl = process.env['REDIS_URL'] || 'redis://localhost:6379';
    redisClient = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
      retryStrategy: (times: number) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
      },
      reconnectOnError: (err: Error) => {
        const targetError = 'READONLY';
        if (err.message.includes(targetError)) {
          return true;
        }
        return false;
      },
    });

    redisClient.on('error', (err: Error) => {
      // eslint-disable-next-line no-console
      console.error('Redis Client Error:', err);
    });

    redisClient.on('connect', () => {
      // eslint-disable-next-line no-console
      console.log('Redis Client Connected');
    });
  }

  return redisClient;
}

/**
 * Disconnect Redis client
 */
export async function disconnectRedis(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
}

/**
 * Check Redis connection
 */
export async function checkRedisConnection(): Promise<boolean> {
  try {
    const client = getRedisClient();
    await client.ping();
    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Redis connection failed:', error);
    return false;
  }
}
