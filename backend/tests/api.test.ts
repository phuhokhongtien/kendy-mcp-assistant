/**
 * API routes tests
 */
import request from 'supertest';
import { createApp } from '../server';

describe('API Routes', () => {
  const app = createApp();

  describe('GET /', () => {
    it('should return root endpoint info', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', 'Kendy MCP Assistant Backend');
      expect(response.body).toHaveProperty('version', '0.1.0');
      expect(response.body).toHaveProperty('status', 'running');
    });
  });

  describe('GET /api/v1', () => {
    it('should return API info', async () => {
      const response = await request(app).get('/api/v1');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', 'Kendy MCP Assistant API');
      expect(response.body).toHaveProperty('version', '0.1.0');
      expect(response.body).toHaveProperty('endpoints');
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/nonexistent');

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('status', 'error');
      expect(response.body).toHaveProperty('statusCode', 404);
    });
  });
});
