module.exports = (error, request, response, next) => {

    switch(error.name) {
        case "NotFoundException": 
            return response.status(404).json({
                statusCode: 404,
                message: error.message
            });
        case "LogicException":
            return response.status(409).json({
                statusCode: 409,
                message: error.message
            });
        case "InvalidDatasException":
            return response.status(400).json({
                statusCode: 400,
                message: error.message
            });
        case "SecurityException":
            return response.status(401).json({
                statusCode: 401,
                message: error.message
            });
        default:
            return response.status(500).json({
                statusCode: 500,
                message: error.message
            });
    }
}