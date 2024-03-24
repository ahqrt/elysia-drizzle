import {
	mysqlTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/mysql-core";

export const posts = mysqlTable("posts", {
	id: serial("id").primaryKey(),
	title: varchar("title", { length: 100 }),
	content: text("content"),
	created_at: timestamp("created_at").defaultNow(),
	updated_at: timestamp("updated_at").defaultNow(),
});

export type Post = typeof posts.$inferSelect;
export type PostInsert = typeof posts.$inferInsert;
