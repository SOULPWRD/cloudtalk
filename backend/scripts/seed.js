import {products} from "../mocks/products.js";
import {sql} from "../client.js";
import {cleanupDatabase} from "./cleanup.js";

const seed = async () => {
  await sql`
    INSERT INTO product ${sql(products)}
  `;
};

const main = async () => {
  await cleanupDatabase();
  await seed();
  // eslint-disable-next-line no-undef
  process.exit(0);
};

try {
  main();
} catch (err) {
  console.error(err);
  // eslint-disable-next-line no-undef
  process.exit(1);
}
