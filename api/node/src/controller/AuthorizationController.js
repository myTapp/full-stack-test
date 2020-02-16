const AuthenticationService = require("../service/AuthorizationService");

module.exports = {
  async isAuthenticatedUser(req, resp) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header(
    //   "Access-Control-Allow-Headers",
    //   "Origin, X-Requested-With, Content-Type, Accept"
    // );
    const {
      hasAutorization,
      dataApi
    } = await AuthenticationService.isAutorization(req);
    return resp.json({ hasAutorization, dataApi });
  }
};
