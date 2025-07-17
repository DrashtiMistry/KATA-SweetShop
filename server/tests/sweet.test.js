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


describe('PUT /api/sweets/:id', () => {
  let sweetId;

  beforeAll(async () => {
    // Create a sweet to update
    const sweet = new Sweet({
      name: 'Gulab Jamun',
      category: 'Milk Sweet',
      pricePerKg: 300,
      availableKg: 5,
    });
    const saved = await sweet.save();
    sweetId = saved._id;
  });

  it('should update a sweet by ID', async () => {
    const updatedData = {
      name: 'Gulab Jamun Special',
      category: 'Milk Sweet',
      pricePerKg: 350,
      availableKg: 8,
    };

    const res = await request(app)
      .put(`/api/sweets/${sweetId}`)
      .send(updatedData);

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Gulab Jamun Special');
    expect(res.body.pricePerKg).toBe(350);
  });

  it('should return 404 for non-existent sweet', async () => {
    const fakeId = new mongoose.Types.ObjectId();

    const res = await request(app)
      .put(`/api/sweets/${fakeId}`)
      .send({
        name: 'Invalid Sweet',
        category: 'Dry Sweet',
        pricePerKg: 200,
        availableKg: 4,
      });

    expect(res.statusCode).toBe(404);
  });
});
