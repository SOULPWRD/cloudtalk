import {describe, it, expect, beforeAll, beforeEach} from "vitest";
import request from "supertest";
import {router} from "./router.js";
import {app} from "../../app.js";
import {cleanupDatabase} from "../../scripts/cleanup.js";
import {sql} from "../../client.js";
import {products} from "../../mocks/products.js";
import {errors} from "celebrate";

const baseUrl = "/products";

beforeEach(cleanupDatabase);

beforeAll(() => {
  app.use(baseUrl, router);
  app.use(errors());
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
          ...product,
          id: expect.any(String),
          // There is an "issue" with numeric data type in the postgres library
          // It returns numeric field as string
          // https://www.npmjs.com/package/postgres#numbers-bigint-numeric
          price: product.price.toFixed(2)
        }))
      );
    });
  });

  describe("POST /products", () => {
    it("returns 400 and throws validation error for incorrect price input", async () => {
      const product = {...products[0], price: -1};

      const response = await request(app)
        .post(baseUrl)
        .send(product)
        .set("Accept", "application/json")
        .expect(400);

      expect(response.status).toBe(400);
    });

    it("returns 201 and creates a single product item", async () => {
      const [product] = products;
      const response = await request(app)
        .post(baseUrl)
        .send(product)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201);

      expect(response.body).toEqual({
        ...product,
        id: expect.any(String),
        // There is an "issue" with numeric data type in the postgres library
        // It returns numeric field as string
        // https://www.npmjs.com/package/postgres#numbers-bigint-numeric
        price: product.price.toFixed(2)
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

    it("returns 404 for non-existing id", async () => {
      const response = await request(app)
        .delete(`${baseUrl}/${crypto.randomUUID()}`)
        .expect(404);

      expect(response.status).toBe(404);
    });
  });

  describe("PATCH /products/:id", () => {
    it("updates a corresponding product item", async () => {
      const [product] = products;
      const [data] = await sql`INSERT INTO product ${sql(product)} RETURNING *`;
      const payload = {name: "Pineapple", quantity: 5};
      const response = await request(app)
        .patch(`${baseUrl}/${data.id}`)
        .set("Accept", "application/json")
        .send(payload)
        .expect(201);

      expect(response.status).toBe(201);
      expect(response.body).toEqual({...data, ...payload});
    });

    it("returns 404 for non-existing id", async () => {
      const response = await request(app)
        .patch(`${baseUrl}/${crypto.randomUUID()}`)
        .expect(404);

      expect(response.status).toBe(404);
    });
  });
});
