import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

import {createRouter as itemsRouter} from "./routes/products/router.js";

const createApp = (client) => {
  const app = express();

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/items", itemsRouter(client));

  return app;
};

export {createApp};
