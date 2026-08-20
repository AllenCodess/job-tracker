import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello from express",
  });
});

app.listen(3000, () => {
  console.log("app is running");
});
