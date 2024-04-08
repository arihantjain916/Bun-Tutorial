import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello Elysia");
app.get("/id/:id", ({ params: { id } }) => id);

app.group("/users", (app) =>
  app
    .get("/", () => "Hello Elysia")
    .get("/login", () => "login")
    .post("/sign-up", "signUp")
    .post("/profile", "getProfile")
);
app.listen(8080);

console.log(`🦊 Elysia is running at http://localhost:8080`);
