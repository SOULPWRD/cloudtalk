import postgres from "postgres";
import "dotenv/config";

const connectionUrl = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:6543/${process.env.POSTGRES_DB}`;

const sql = postgres(connectionUrl);

export {sql};
