import {sql} from "../client.js";

const cleanupDatabase = async () => {
  const tables = await sql`
    SELECT tablename
    FROM pg_tables
    WHERE schemaname = 'public'
  `;

  // Truncate each table dynamically
  for (const {tablename} of tables) {
    await sql.unsafe(`TRUNCATE TABLE "${tablename}" RESTART IDENTITY CASCADE`);
  }
};

export {cleanupDatabase};
