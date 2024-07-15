import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router/index.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

const corsOptions = {
  // origin: process.env.CLIENT_URL,
  origin: "http://127.0.0.1:5173",
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/jwt-auth", router);

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    https.createServer(options, app).listen(PORT, () => {
      console.log(`HTTPS Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
