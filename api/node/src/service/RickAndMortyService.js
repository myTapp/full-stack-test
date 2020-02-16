const axios = require("axios");
getPersons = persons => {
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

getInfos = info => {
  info.cont = undefined;
  return info;
};
module.exports = {
  async getApiData(req, resp) {
    let rk = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${req}`
    );
    let dataApi = {
      info: getInfos(rk.data.info),
      persons: getPersons(rk.data.results)
    };
    return dataApi;
  }
};
