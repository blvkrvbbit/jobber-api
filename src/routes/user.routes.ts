import { Context, Hono } from "hono";
const userRoutes = new Hono();

/***************************************************
 *  User Routes
 *  /auth (Login route)
 *  / (register route)
 *  / (logout route)
 *  /client/:id (client route)
 *  /freelancers/:id (freelancer route)
 *  /authenticated (check to see if authenticated)
 *
 **************************************************/
userRoutes.post("/", async (c: Context) => {
  return c.json({
    message: "Register user",
  });
});

userRoutes.post("/auth", async (c: Context) => {
  return c.json({
    message: "Login user",
  });
});

userRoutes.post("/logout", async (c: Context) => {
  return c.json({
    message: "Logout user",
  });
});

userRoutes.get("/authenticated", async (c: Context) => {
  return c.json({
    message: "Check if user is authenticated",
  });
});

export default userRoutes;
