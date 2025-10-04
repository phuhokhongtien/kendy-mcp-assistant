/**
 * Health endpoint tests
 */
import request from 'supertest';
import { createApp } from '../server';

describe('Health API', () => {
  const app = createApp();

  describe('GET /api/v1/health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/api/v1/health');

      expect(response.status).toBeDefined();
      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('services');
      expect(response.body).toHaveProperty('version');
    });

    it('should have database and redis service status', async () => {
      const response = await request(app).get('/api/v1/health');

      expect(response.body.services).toHaveProperty('database');
      expect(response.body.services).toHaveProperty('redis');
    });

    it('should return version 0.1.0', async () => {
      const response = await request(app).get('/api/v1/health');

      expect(response.body.version).toBe('0.1.0');
    });
  });
});
