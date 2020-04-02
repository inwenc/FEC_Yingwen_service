const request = require('supertest')
const app = require('../../server/index.js');
import 'babel-polyfill';

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app)
      .get("/")
      expect(response.statusCode).toBe(200);

      afterAll((done) => {
        done();
  });
});
// test("It should response the GET method", (done) => {
//   request(app)
//     .get("/")
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         return done(err)
//       }
//     })
// });

})