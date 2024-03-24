import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
	schema: "./src/schema/index.ts",
	out: "./drizzle",
	driver: "mysql2",
	dbCredentials: {
		host: "localhost",
		user: "root",
		password: "12345678",
		database: "elysia",
	},
} satisfies Config;
