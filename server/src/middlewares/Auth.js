const CONSTANTS = require("./../configs/Constants");
const Token = require("./../security/Token");

module.exports = {


    async hasPermission(request, response, next) {

        let accessToken = request.header(CONSTANTS.PARAM_HEADER_AUTHORIZATION);

        if (!accessToken) {
            return response.status(403).json({
                statusCode: 403,
                message: "Você não tem permissão para acessar os recursos!"
            });
        }

        accessToken = accessToken.replace(CONSTANTS.PARAM_PREFIX_TOKEN, "");

        try {
            await new Token().isValid(accessToken);
        } catch (error) {
            return response.status(403).json({
                statusCode: 403,
                message: "Você não tem permissão para acessar os recursos!"
            });
        }

        next(); 
    }
}