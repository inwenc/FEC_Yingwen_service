const request = require('supertest')
const app = require('../../server/index.js');

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app)
      .get("/")
      expect(response.statusCode).toBe(202);
      afterAll((done) => {
        done();
  });
});
})