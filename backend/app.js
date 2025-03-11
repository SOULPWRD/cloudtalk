import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import {errors} from "celebrate";
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(errors());

export {app};
