import express from "express";

const router = express.Router();

const createRouter = (client) => {
  router.get("/", async (_, res) => {
    const products = await client`
        SELECT * FROM product
    `;
    res.send(products);
  });

  return router;
};

export {createRouter};
