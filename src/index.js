import dotenv from "dotenv";
import connectDB from "../src/db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./dotenv",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to server", error);
  });
