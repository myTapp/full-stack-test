
import Service from "./Service";

export default class UserService extends Service {
  async authenticate(requestBody) {

    let resp = await this.post(`http://localhost:3333/users/authenticate`, requestBody);
    localStorage.setItem("jwt", resp.token);
    return resp;
  }

  async getDataApi(pages) {
    let jwt = localStorage.getItem("jwt");
    let resp = await this.post(`http://localhost:3333/api/authorization`, {
      page: pages
    }, {  headers: {"Authorization": `Bearer ${jwt}`}});
    console.log(resp);
    return resp;
  }
}
