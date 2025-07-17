const request = require("supertest");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/api/sweets", require("../routes/sweetRoutes"));

describe("GET /api/sweets", () => {
  it("should return all sweets", async () => {
    const res = await request(app).get("/api/sweets");
    expect(res.statusCode).toBe(200); // Will fail initially
  });
});
