import { db } from "./src/database";

db.query.users.findFirst().then((user) => {
	console.log(user);
});
