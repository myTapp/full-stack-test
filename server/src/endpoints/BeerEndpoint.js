const Endpoint = require("./Endpoint");

class BeerEndpoint extends Endpoint {

    constructor(beerService, cacheClient) {
        super();
        this._beerService = beerService;
        this._cacheClient = cacheClient;
        this.TIME_EXPIRED_CACHE = (60 * 60);
        this.findAllPaginate = this.findAllPaginate.bind(this);

    }


    async findAllPaginate(request, response, next) {
        try {
            const page = request.query.page || 1;
            const quantityPerPage = request.query.per_page || 10;
            const keyCacheBeers = `beers${page}${quantityPerPage}`;

            let beers = await this._cacheClient.remembersadd(
                keyCacheBeers, 
                () => this._beerService.findAllPaginate(page, quantityPerPage),
                this.TIME_EXPIRED_CACHE
            );

            response.json(beers);
        } catch(error) {
            next(error);
        }
    }


}

module.exports = BeerEndpoint;