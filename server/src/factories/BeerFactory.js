const Factory = require("./Factory");
const BeerRepository = require("./../repositories/BeerRepository");
const BeerService = require("./../services/BeerService");
const httpClient = require("./../utils/HttpClient");

class BeerServiceFactory extends Factory {

    make() {
        return new BeerService(
            new BeerRepository(httpClient)
        );
    }
}

module.exports = BeerServiceFactory;