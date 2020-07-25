
class BeerService {

    constructor(repository) {
        this._repository = repository;
    }

    findAllPaginate(page, quantityPerPage) {
       return this._repository.findAllPaginate(page, quantityPerPage);
    }
}

module.exports = BeerService;