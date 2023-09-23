import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRoute from "./routes/userRoute.js"

const app=express();
connectDB();

const port=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/auth",authRoute);


app.use(errorHandler);

app.listen(port,()=>console.log(`server running on port ${port}`));