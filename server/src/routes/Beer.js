const BeerFactory = require("./../factories/BeerFactory");
const cacheClient = require("./../utils/Cache");
const BeerEndpoint = require("./../endpoints/BeerEndpoint");

const beerEndpoint = new BeerEndpoint(
    new BeerFactory().make(), cacheClient
);

module.exports = (router)  => {

    router.get("/", beerEndpoint.findAllPaginate);
    
    return router;
}