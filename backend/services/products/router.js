import express from "express";
import {celebrate, Segments} from "celebrate";
import {sql} from "../../client.js";
import {createProductPayload, deleteProductParam} from "./schema.js";

const router = express.Router();

router.get("/", async (_, res) => {
  const products = await sql`
    SELECT
      id,
      name,
      quantity,
      price
    FROM product
  `;
  return res.json(products);
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

    return res.status(201).json(product);
  }
);

router.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: deleteProductParam
  }),
  async (req, res) => {
    const id = req.params.id;

    const [result] = await sql`SELECT id FROM product WHERE id=${id}`;
    if (!result?.id) {
      return res.status(404).send();
    }

    await sql`DELETE FROM product WHERE id=${id}`;
    return res.status(204).send();
  }
);

export {router};
