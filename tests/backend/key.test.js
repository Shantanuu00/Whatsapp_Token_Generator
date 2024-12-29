import request from 'supertest';
import app from '../../backend/src/app.js';

describe('Key Management API', () => {
  let token;

  beforeAll(async () => {
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@example.com', password: 'adminpassword' });
    token = loginResponse.body.token;
  });

  test('should fetch all keys', async () => {
    const response = await request(app)
      .get('/api/keys')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('should create a new key', async () => {
    const response = await request(app)
      .post('/api/keys')
      .set('Authorization', `Bearer ${token}`)
      .send({ validity: '2025-01-01', usageLimit: 100 });
    expect(response.status).toBe(201);
    expect(response.body.key).toBeDefined();
  });
});
