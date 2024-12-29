import request from 'supertest';
import app from '../../backend/src/app.js';

describe('Admin API', () => {
  let token;

  beforeAll(async () => {
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@example.com', password: 'adminpassword' });
    token = loginResponse.body.token;
  });

  test('should create a reseller', async () => {
    const response = await request(app)
      .post('/api/admin/resellers')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'New Reseller', email: 'reseller@example.com', password: 'resellerpassword' });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('New Reseller');
  });

  test('should fetch all resellers', async () => {
    const response = await request(app)
      .get('/api/admin/resellers')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
