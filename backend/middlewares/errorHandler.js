const errorHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode;
    const message=err.message;

    res.status(statusCode).json({message})
}

export default errorHandler;