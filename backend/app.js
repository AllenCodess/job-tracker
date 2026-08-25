import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: ".env" });

const app = express();
const DB = process.env.DATABASE;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("json spaces", 2);
app.use(cookieParser());

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
  }
};

connectDB();

app.use("/api/v1/users", userRoute);
app.use("/api/v1/jobs", jobRoute);

app.listen(3000, () => {
  console.log("app is running");
});
