const request = require("supertest");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const sweetRoutes = require("../routes/sweetRoutes");
app.use(express.json());
app.use("/api/sweets", sweetRoutes);

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/test_sweets");
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /api/sweets", () => {
  it("should return array of sweets", async () => {
    const res = await request(app).get("/api/sweets");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
