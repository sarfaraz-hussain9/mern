import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

const app=express();
connectDB();

const port=process.env.PORT;

app.listen(port,()=>console.log(`server running on port ${port}`));