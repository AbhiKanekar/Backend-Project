const requestHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => { next(err) }
        );
    }
}

export { asyncHandler }



// const asyncHandler = (fn) => async (err,req,res,next) => {
//     try {
//         await fn(err,req,res,next);
//     } catch (error) {
//         res.status(err.code || 400).json({
//             success : false,
//             message : err.message || "Internal Server Error",
//         })

//     }
// }

