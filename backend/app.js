import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import jobRoute from "./routes/jobRoute.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: ".env" });

const app = express();
const DB = process.env.DATABASE;
const PORT = process.env.PORT || 3000;

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

// Serve to frontend

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log("app is running");
});
