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

  describe("POST /products", () => {
    it("creates a single product item", async () => {
      const [product] = products;
      const response = await request(app)
        .post(baseUrl)
        .send(product)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201);

      expect(response.body).toEqual({
        id: expect.any(String),
        ...product
      });
    });
  });

  describe("DELETE /products/:id", () => {
    it("deletes a selected product based on its id", async () => {
      const [data] =
        await sql`INSERT INTO product ${sql(products)} RETURNING *`;
      const response = await request(app)
        .delete(`${baseUrl}/${data.id}`)
        .expect(204);

      const [{count}] =
        await sql`SELECT count(id) as count FROM product LIMIT 1`;

      expect(response.status).toBe(204);
      expect(Number(count)).toBe(1);
    });
  });
});
