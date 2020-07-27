const BeerFactory = require("./../factories/BeerFactory");
const cacheClient = require("./../utils/Cache");
const BeerEndpoint = require("./../endpoints/BeerEndpoint");

const beerEndpoint = new BeerEndpoint(
    new BeerFactory().make(), cacheClient
);




module.exports = (router)  => {

    /**
     * @swagger
     * definitions:
     *  paginateDatas:
     *     properties:
     *        page:
     *          type: string
     *        per_page:
     *          type: string
     */

    /**
     * @swagger 
     * /beers:
     *   get:
     *     tags:
     *     - Beer
     *     summary: "List beers api in address: https://api.punkapi.com/v2/"
     *     parameters:
     *        - in: header
     *          name: Authorization
     *          schema:
     *              type: string
     *              required: true
     *        - in: query
     *          name: page
     *          schema:
     *              type: integer 
     *        - in: query
     *          name: per_page
     *          schema:
     *              type: integer 
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *          description: Return products success
     *     
     */
    router.get("/", beerEndpoint.findAllPaginate);
    
    return router;
}