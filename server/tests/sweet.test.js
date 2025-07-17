const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // Express app exported from server.js
const Sweet = require('../models/sweet'); // Mongoose model

beforeAll(async () => {
  const MONGO_TEST_URI = 'mongodb://127.0.0.1:27017/sweetshop_test';
  await mongoose.connect(MONGO_TEST_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase(); // clean test DB
  await mongoose.connection.close();
});

describe('POST /api/sweets', () => {
  it('should create a new sweet', async () => {
    const newSweet = {
      name: 'Rasgulla',
      category: 'Milk Sweet',
      pricePerKg: 250,
      availableKg: 10,
    };

    const res = await request(app)
      .post('/api/sweets')
      .send(newSweet);

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Rasgulla');
    expect(res.body.availableKg).toBe(10);
  });

  it('should fail when required fields are missing', async () => {
    const res = await request(app)
      .post('/api/sweets')
      .send({ name: 'EmptySweet' }); // missing other fields

    expect(res.statusCode).toBe(400);
  });
});
