import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router/index.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/jwt-auth", router);

// console.log("SMTP_HOST:", process.env.SMTP_HOST);
// console.log("SMTP_PORT:", process.env.SMTP_PORT);
// console.log("SMTP_USER:", process.env.SMTP_USER);
// console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD);
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
