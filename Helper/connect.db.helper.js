import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = async () => {
  try {
    if (process.env.NODE_ENV == "PROD") {
      await mongoose.connect(process.env.MONGO_CLOUD);
      console.log("connected to the cloud mongodb");
    } else {
      await mongoose.connect(process.env.MONGO_LOCAL);
      console.log("connected to the local mongodb");
    }
  } catch (error) {
    console.log("Connection Failed in Database", error);
  }
};

// with the function keyword general syntax
// export function connectDb () {

// }
