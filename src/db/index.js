import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "\n Connected to mongoDB !! DB HOST: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log(`Error Connecting to mongoDB, ${error}`);
    process.exit(1);
  }
};

export default connectDB;
