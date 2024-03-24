import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from ".";

await migrate(db, { migrationsFolder: "./migrations" });
