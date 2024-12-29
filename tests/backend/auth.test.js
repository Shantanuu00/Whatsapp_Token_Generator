import request from 'supertest';
import app from '../../backend/src/app.js';

describe('Authentication API', () => {
  test('should log in successfully with valid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@example.com', password: 'adminpassword' });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  test('should fail with invalid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@example.com', password: 'wrongpassword' });
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid credentials');
  });
});
