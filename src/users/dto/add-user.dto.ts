import { t } from "elysia";

export const addUserDto = t.Object({
  name: t.String(),
  email: t.String(),
  password: t.String(),
});
