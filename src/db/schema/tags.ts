import { int, mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core";

export const tags = mysqlTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  parentId: int("parent_id").default(0),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export type Post = typeof tags.$inferSelect;
export type PostInsert = typeof tags.$inferInsert;
