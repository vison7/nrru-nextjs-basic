import { Pool } from "pg";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
    ? parseInt(process.env.POSTGRES_PORT, 10)
    : 5432, // Ensure port is a number
});

export async function query(text: string, params: unknown[]=[]) {
  //   const start = Date.now();
  try {
    const res = await pool.query(text, params);
    // const duration = Date.now() - start;
    // console.log("executed query", { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    // console.error("Error executing query", { text, error });
    throw error;
  }
}

export default pool;
