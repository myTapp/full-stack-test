const AuthEndpoint = require("./../endpoints/AuthEndpoint");
const AuthFactory = require("./../factories/AuthFactory");

const authEndpoint = new AuthEndpoint(
    new AuthFactory().make()
);

module.exports = (router)  => {

     /**
     * @swagger
     * definitions:
     *  AuthDatas:
     *     properties:
     *        email:
     *          type: string
     *          require: true
     *        password:
     *          type: string
     *          require: true
     */

    /**
     * @swagger 
     * /auth/login:
     *   post:
     *     tags:
     *     - "Auth"
     *     summary: "make authentication operation"
     *     parameters:
     *      - in: body
     *        name: body  
     *        required: true
     *        schema:  
     *           $ref: "#/definitions/AuthDatas"
     *     produces:
     *       - application/json
     *     security:
     *       - Bearer: []
     *     responses:
     *       200:
     *          description: Return products success
     *       400:
     *          description: Return when datas request is invalid.
     *       409:
     *          description: Email already used.
     *     
     */
    router.post("/login", authEndpoint.authentication);
    
    return router;
}