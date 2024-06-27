import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// import router
import userRoutes from "./routes/user.routes.js";

app.use("/api/v1/users", userRoutes);
export { app };
