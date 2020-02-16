const AuthenticationService = require("../service/AuthorizationService");
const RickAndMortyService = require("../service/RickAndMortyService");

module.exports = {
  async getData(req, resp) {
    const { hasAutorization } = await AuthenticationService.isAutorization(req);
    const data =  await RickAndMortyService.getApiData(req.body.page, hasAutorization);
    if(hasAutorization){
      return resp.json({ data });
    }else{
     return res.status(data.error.status).send({ error: data.error.msg })
      
    }
    
  }
};
