module.exports = (error, request, response, next) => {
    return response.status(404).json({
        statusCode: 404,
        message: "Rota não encontrada"
    });
}
