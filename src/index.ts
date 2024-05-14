import "dotenv/config";
import { Elysia, t } from "elysia";
import { db } from "./db";
import { insertUserSchema, users } from "./db/schema";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/users", async () => {
    const users = await db.query.users.findMany();
    return users;
  })
  .post(
    "/users",
    async (req) => {
      const body = req.body;
      const newUser = await db.insert(users).values(body).execute();
      return newUser;
    },
    {
      body: insertUserSchema,
    },
  )
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
