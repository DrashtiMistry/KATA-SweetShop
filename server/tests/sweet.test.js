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


describe('DELETE /api/sweets/:id', () => {
  it('should delete a sweet by ID', async () => {
    // First, create a sweet to delete
    const newSweet = await Sweet.create({
      name: 'Test Sweet',
      category: 'Barfi',
      pricePerKg: 200,
      availableKg: 10,
    });

    const res = await request(app).delete(`/api/sweets/${newSweet._id}`);
    
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Sweet deleted successfully');

    // Ensure it's deleted from DB
    const sweetInDb = await Sweet.findById(newSweet._id);
    expect(sweetInDb).toBeNull();
  });

  it('should return 404 if sweet not found', async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).delete(`/api/sweets/${fakeId}`);

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Sweet not found');
  });
});


describe('GET /api/sweets - Filter by category and price range', () => {
  beforeAll(async () => {
    // Seed test data
    await Sweet.insertMany([
      { name: 'Kaju Katli', category: 'Barfi', pricePerKg: 250, availableKg: 5 },
      { name: 'Gulab Jamun', category: 'Mithai', pricePerKg: 180, availableKg: 10 },
      { name: 'Milk Cake', category: 'Barfi', pricePerKg: 120, availableKg: 7 },
      { name: 'Rasgulla', category: 'Mithai', pricePerKg: 90, availableKg: 12 },
    ]);
  });

  afterAll(async () => {
    await Sweet.deleteMany(); // Clean up DB
  });

  it('should return sweets filtered by category', async () => {
    const res = await request(app).get('/api/sweets?category=Barfi');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    res.body.forEach((sweet) => {
      expect(sweet.category).toBe('Barfi');
    });
  });

  it('should return sweets within price range', async () => {
    const res = await request(app).get('/api/sweets?minPrice=100&maxPrice=200');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    res.body.forEach((sweet) => {
      expect(sweet.pricePerKg).toBeGreaterThanOrEqual(100);
      expect(sweet.pricePerKg).toBeLessThanOrEqual(200);
    });
  });

  it('should return sweets filtered by both category and price range', async () => {
    const res = await request(app).get('/api/sweets?category=Barfi&minPrice=100&maxPrice=200');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe('Milk Cake');
  });

  it('should return an empty array if no sweets match the filters', async () => {
    const res = await request(app).get('/api/sweets?category=Barfi&minPrice=10&maxPrice=50');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
});
