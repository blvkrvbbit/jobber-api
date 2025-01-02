import { Hono } from "hono";
import jobRoutes from "./routes/job.routes";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.route("/api/jobs", jobRoutes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
