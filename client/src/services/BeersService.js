import HttpClient from "../utils/HttpClient"

class BeerService {

    constructor() {
        this._httpClient = new HttpClient();
    }

    findAllPaginate(accessToken, page, quantityPerPage) {
        accessToken = CONSTANTS.APP_PARAM_PREFIX_TOKEN + accessToken;
        return this._httpClient.get(
            `${CONSTANTS.APP_API_URL}beers?page=${page}&per_page=${quantityPerPage}`,
            {
                [CONSTANTS.APP_PARAM_HEADER_AUTHORIZATION]: accessToken
            }
        );
    }
}

export default BeerService;