import { Hono } from "hono";
import type { Context } from "hono";
const jobRoutes = new Hono();

/***************************************************
 *  Job Routes
 *  /jobs (GET)
 *  /jobs (POST)
 *  /jobs/:id (GET job by id)
 *  /jobs/:id (PUT update job by id)
 ***************************************************/
jobRoutes.get("/", async (c: Context) => {
  return c.json({
    message: "Get all jobs",
  });
});

jobRoutes.post("/", async (c: Context) => {
  return c.json({
    message: "Create job",
  });
});

jobRoutes.get("/:id", async (c: Context) => {
  const { id } = c.req.param();
  return c.json({
    message: `Get job by ${id}`,
  });
});

jobRoutes.put("/:id", (c: Context) => {
  return c.json({
    message: "Update job by id",
  });
});

export default jobRoutes;
