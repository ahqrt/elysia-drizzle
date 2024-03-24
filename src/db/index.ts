import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connection = await mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "elysia",
	password: "12345678",
});

export const db = drizzle(connection, { schema: schema, mode: "planetscale" });
