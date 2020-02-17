
import Service from "./Service";

export default class UserService extends Service {
  async login(requestBody) {

    let resp = await this.post(`http://localhost:3333/api/users/login`, requestBody);
    localStorage.setItem("jwt", resp.token);
    return resp;
  }

  async getDataApi(pages) {
    let jwt = localStorage.getItem("jwt");
    let resp = await this.post(`http://localhost:3333/api/chars`, {
      page: pages
    }, {  headers: {"Authorization": `Bearer ${jwt}`}});
    return resp;
  }
}
