import postgres from "postgres";

const connectionUrl = "postgres://myuser:mypassword@localhost:6543/items";
const sql = postgres(connectionUrl);

export {sql};
