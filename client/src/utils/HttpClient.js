import axios from "axios";

class HttpClient {

    get(url, headers) {
        return axios.get(url, { headers: headers }).then(this._extractData);
    }

    post(url, datas, headers) {
        return axios.post(url, datas, { headers }).then(this._extractData);
    }

    _extractData(response) {
        if (response.data) {
            return response.data;
        }
        return response;
    }

    static extractError(error) {
        if (error.response) {
            return error.response.data;
        }
        return error;
    }
  
}

export default HttpClient;