import axios from "axios";
import Service from "./Service";

const getInfos = info => {
  info.cont = undefined;
  return info;
};

const getPersons = persons => {

  let personStore = [];
  let personDto = {};
  persons.forEach(person => {
    personDto = {
      name: person.name,
      image: person.image,
      species: person.species,
      gender: person.gender
    };

    personStore.push(personDto);
  });
  return personStore;
};

export default class extends Service {
  async authenticate(requestBody) {

    let resp = await this.post(`http://localhost:3333/users/authenticate`, requestBody);
    localStorage.setItem("jwt", resp.token);
    sessionStorage.setItem("jwt", resp.token);
    return resp;
  }

  // async getDataApi(requestBody) {
  //   let jwt = localStorage.getItem("jwt");
  //   let resp = await this.post(`http://localhost:3333/api/authorization`, {
  //     token: jwt,
  //     page: 2
  //   });
  //   if(!jwt){
  //     console.log("token sumiu")
  //   }
  //   localStorage.setItem("jwt", resp.token);
  //   console.log(resp);
  //   return resp;
  // }


  async getDataApi(page) {
    console.log("pages in service", page)
    let resp = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );
    let dataApi = {
      info: getInfos(resp.data.info),
      persons: getPersons(resp.data.results)
    };
    console.log(dataApi);
    return dataApi;
  }

  // async getDataApi(page) {
  //   let resp = await axios.get(
  //     `https://rickandmortyapi.com/api/character/?page=${page}`,
  //   );
  //   let dataApi = {
  //     info: getInfos(resp.data.info),
  //     perosn: getPersons(resp.data.results)
  //   };
  //   console.log(dataApi);
  // }

  // async getDataApi(page) {
  //   let resp = await this.post(
  //     `http://localhost:3333/api/authorization`,
  //     { pages: 2 },

  //   );
  //   console.log(resp);
  // }
}
