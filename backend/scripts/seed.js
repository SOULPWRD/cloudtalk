import {faker} from "@faker-js/faker";
import debug from "debug";
import prexit from "prexit";
import {sql} from "../client.js";
import {cleanupDatabase} from "./cleanup.js";

const log = debug("seed");
const args = process.argv.slice(2);

const count = Number(args[0]);

if (isNaN(count)) {
  throw new Error("Count value has to be number type");
}

const fakeProducts = [...new Array(count)].map(() => ({
  name: faker.food.fruit(),
  quantity: faker.number.int({min: 0, max: 1000}),
  price: faker.number.float({min: 0, max: 1000})
}));

log("Following data are going to be seeded", fakeProducts);

const seed = async () => {
  await sql`
    INSERT INTO product ${sql(fakeProducts)}
  `;
};

const main = async () => {
  log("Cleaning up database...");
  await cleanupDatabase();
  log("Seeding data...");
  await seed();
  log("Seeding has completed.");
  process.exit(0);
};

try {
  log("Seeding has started.");
  main();
} catch (err) {
  log("An error has encountered during the seeding.");
  console.error(err);
  process.exit(1);
}

prexit(async () => {
  log("Gracefully terminating process");
  log("Closing database connection");
  await sql.end();
});
