const supertest = require("supertest");
const { app, server } = require("../app.js");
const mongoose = require("mongoose");
const { response } = require("express");
beforeAll(async () => {
  await new Promise((resolve) =>
    mongoose.connection.once("connected", resolve)
  );
});
const api = supertest(app);

it("should get all users", async () => {
  await api
    .get("/api/users")
    .expect(200)
    .expect("Content-Type", /application\/json/)
    expect(response.body.length).toBe(1)
});
afterAll(async () => {
  server.close();
  await mongoose.connection.close();
});
