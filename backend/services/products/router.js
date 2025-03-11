import express from "express";
import {celebrate, Segments} from "celebrate";
import {sql} from "../../client.js";
import {createProductPayload} from "./schema.js";

const router = express.Router();

router.get("/", async (_, res) => {
  const products = await sql`
    SELECT
      id,
      name,
      quantity,
      price
    FROM product`;
  res.json(products);
});

router.post(
  "/",
  celebrate({
    [Segments.BODY]: createProductPayload
  }),
  async (req, res) => {
    const [product] = await sql`
    INSERT INTO product ${sql(req.body)} RETURNING *
  `;

    res.status(201).json(product);
  }
);

export {router};
