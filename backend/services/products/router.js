import express from "express";
import {sql} from "../../client.js";

const router = express.Router();

router.get("/", async (_, res) => {
  const products = await sql`
        SELECT * FROM product
    `;
  res.send(products);
});

export {router};
