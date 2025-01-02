import { Hono } from "hono";
import jobRoutes from "./routes/job.routes";
import userRoutes from "./routes/user.routes";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.route("/api/jobs", jobRoutes);
app.route("/api/users", userRoutes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
