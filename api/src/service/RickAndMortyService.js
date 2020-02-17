const axios = require("axios");

const ErrorHandler = require("../ErrorHandler");


module.exports = {
  async getApiData(req, hasAutorization) {
    let data = {};
    let rickMortyData = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${req}`
    );
    if (hasAutorization) {
      data = {
        info: getInfos(rickMortyData.data.info),
        chars: getPersons(rickMortyData.data.results)
      };
    } else {
      data = {error:ErrorHandler.FORBIDEN }
    }

    return data;
  }
};


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