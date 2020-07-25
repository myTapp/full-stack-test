const UserEndpoint = require("./../endpoints/UserEndpoint");
const UserFactory = require("./../factories/UserServiceFactory");
const cacheClient = require("./../utils/Cache");

const userEndpoint = new UserEndpoint(
    new UserFactory().make(), cacheClient
);

module.exports = (router)  => {

    router.get("", userEndpoint.findAll);
    router.get("/:id", userEndpoint.findById);
    router.delete("/:id", userEndpoint.delete);
    router.put("/:id", userEndpoint.update);
    router.post("/", userEndpoint.create);

    
    return router;
}