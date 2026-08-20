import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: ".env" });

const app = express();

const DB = process.env.DATABASE;

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello from express",
  });
});

app.listen(3000, () => {
  console.log("app is running");
});
