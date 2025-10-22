const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/db');

beforeAll(async () => {
  // Create table if not exists (or run migrations)
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    );
  `);
  // Clean slate
  await db.query('TRUNCATE users RESTART IDENTITY CASCADE;');
});

afterAll(async () => {
  // Optionally drop tables or close pool
  await db.pool.end();
});

describe('Users integration', () => {
  test('POST /users creates a user and GET /users returns it', async () => {
    const createRes = await request(app).post('/users').send({ name: 'Alice' });
    expect(createRes.status).toBe(201);
    expect(createRes.body).toMatchObject({ id: 1, name: 'Alice' });

    const getRes = await request(app).get('/users');
    expect(getRes.status).toBe(200);
    expect(Array.isArray(getRes.body)).toBe(true);
    expect(getRes.body[0]).toMatchObject({ id: 1, name: 'Alice' });
  });
});
