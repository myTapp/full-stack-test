const AuthEndpoint = require("./../endpoints/AuthEndpoint");
const AuthFactory = require("./../factories/AuthFactory");

const authEndpoint = new AuthEndpoint(
    new AuthFactory().make()
);

module.exports = (router)  => {

    router.post("/login", authEndpoint.authentication);
    
    return router;
}