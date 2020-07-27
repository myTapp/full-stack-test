class BeerRepository {

    constructor(httpClient) {
        this._baseApiJunk = process.env.API_PUNK;
        this._httpClient = httpClient;
    }

    findAllPaginate(page, quantityPerPage) {
        return this._httpClient
        .get(`${this._baseApiJunk}beers?page=${page}&per_page=${quantityPerPage}`);
    }
}

module.exports = BeerRepository;