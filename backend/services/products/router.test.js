import {describe, it, expect, beforeAll, beforeEach} from "vitest";
import request from "supertest";
import {router} from "./router.js";
import {app} from "../../app.js";
import {cleanupDatabase} from "../../mocks/cleanup.js";
import {sql} from "../../client.js";
import {products} from "../../mocks/products.js";

const baseUrl = "/products";

beforeEach(cleanupDatabase);

beforeAll(() => {
  app.use(baseUrl, router);
});

describe("Products router", () => {
  describe("GET /products", () => {
    it("fetches all products related data", async () => {
      await sql`INSERT INTO product ${sql(products)}`;

      const response = await request(app)
        .get(baseUrl)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body).toEqual(
        products.map((product) => ({
          id: expect.any(String),
          ...product
        }))
      );
    });
  });
});
