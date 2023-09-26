import express from "express";
import path from "path"
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

const app=express();
connectDB();
app.use(cookieParser())

const port=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/auth",authRoute);

if(process.env.NODE_ENV==='production'){
    const __dirName=path.resolve();
    app.use(express.static(path.join(__dirName,'/frontend/build')));

    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirName,'frontend','build','index.html')))
}else{
    app.get('/',(req,res)=> res.send('Server is Ready'))
}


app.use(errorHandler);

app.listen(port,()=>console.log(`server running on port ${port}`));