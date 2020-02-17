const ErrorHandler = {
   INVALID_CREDENCIALS: {
       status: 400,
       msg: "Invalid Credencials",
   },
   FORBIDEN: {
       status: 403,
       msg: "Invalid Token"
   }
}


module.exports = ErrorHandler;