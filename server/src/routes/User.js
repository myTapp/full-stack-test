const UserEndpoint = require("./../endpoints/UserEndpoint");
const UserFactory = require("./../factories/UserServiceFactory");
const cacheClient = require("./../utils/Cache");

const userEndpoint = new UserEndpoint(
    new UserFactory().make(), cacheClient
);

module.exports = (router)  => {

      /**
     * @swagger
     * definitions:
     *  userDatas:
     *     properties:
     *        name:
     *          type: string
     *          require: true
     *        email:
     *          type: string
     *          require: true
     *        password:
     *          type: string
     *          require: true
     */

    /**
     * @swagger 
     * /users:
     *   get:
     *     tags:
     *     - User
     *     summary: "List users"
     *     parameters:
     *        - in: header
     *          name: Authorization
     *          required: true
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *          description: Return users success
     *       404:
     *          description: Return when user not found.
     *       401:
     *          description: Not mencionated accessToken na request
     *       403:
     *          description: Not have permission to access resources
     */
    router.get("", userEndpoint.findAll);

     /**
     * @swagger 
     * /users/{userId}:
     *   get:
     *     tags:
     *     - User
     *     summary: "Get user by id"
     *     parameters:
     *        - in: header
     *          name: Authorization
     *          required: true
     *        - in: path
     *          name: userId
     *          required: true
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *          description: Return user success
     *       404:
     *          description: Return when user not found.
     *       401:
     *          description: Not mencionated accessToken na request
     *       403:
     *          description: Not have permission to access resources
     */
    router.get("/:id", userEndpoint.findById);

     /**
     * @swagger 
     * /users/{userId}:
     *   delete:
     *     tags:
     *     - User
     *     summary: "Delete one user by id"
     *     parameters:
     *        - in: header
     *          name: Authorization
     *          required: true
     *        - in: path
     *          name: userId
     *          required: true
     *     produces:
     *       - application/json
     *     responses:
     *       204:
     *          description: Delete user success
     *       404:
     *          description: Return when user not found.
     *       401:
     *          description: Not mencionated accessToken na request
     *       403:
     *          description: Not have permission to access resources
     */
    router.delete("/:id", userEndpoint.delete);

     /**
     * @swagger 
     * /users/{userId}:
     *   put:
     *     tags:
     *     - User
     *     summary: "Update datas one user"
     *     parameters:
     *        - in: header
     *          name: Authorization
     *          required: true
     *        - in: path
     *          name: userId
     *          required: true
     *        - in: body
     *          name: body
     *          required: true
     *          schema:
     *            $ref: "#/definitions/userDatas"
     *     produces:
     *       - application/json
     *     responses:
     *       204:
     *          description: Update user success
     *       409:
     *          description: Return when try update email, but email already used.
     *       404:
     *          description: Return when user not found.
     *       401:
     *          description: Not mencionated accessToken na request
     *       403:
     *          description: Not have permission to access resources
     */
    router.put("/:id", userEndpoint.update);

    /**
     * @swagger 
     * /users:
     *   post:
     *     tags:
     *     - User
     *     summary: "Create user"
     *     parameters:
     *        - in: header
     *          name: Authorization
     *          required: true
     *        - in: body
     *          name: body
     *          required: true
     *          schema:
     *            $ref: "#/definitions/userDatas"
     *     produces:
     *       - application/json
     *     responses:
     *       201:
     *          description: Update user success
     *       409:
     *          description: Return when try update email, but email already used.
     *       401:
     *          description: Not mencionated accessToken na request
     *       403:
     *          description: Not have permission to access resources
     */
    router.post("/", userEndpoint.create);

    
    return router;
}