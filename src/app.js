import express from "express";
import cors from "cors";
import propertyRouter from "./routes/propertyRoutes.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", propertyRouter);
export { app };
