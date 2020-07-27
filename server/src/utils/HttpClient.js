const axios = require("axios");

module.exports = {
    
    get(url) {
        return axios.get(url).then(response => response.data);
    }
}