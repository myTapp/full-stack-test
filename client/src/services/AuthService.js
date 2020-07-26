import HttpClient from "../utils/HttpClient"
import Token from "../utils/Token";

class AuthService {

    constructor() {
        this._httpClient = new HttpClient();
        this._tokenUtil = new Token();
    }

    authenticate(credentials) {
        return this._httpClient.post(
            `${CONSTANTS.APP_API_URL}auth/login`, credentials
        );
    }

    logout() {
        localStorage.removeItem(CONSTANTS.APP_LOCALSTORAGE_PARAM_TOKEN);
    }
 
    isAuthenticated() {
        const accessToken = localStorage.getItem(CONSTANTS.APP_LOCALSTORAGE_PARAM_TOKEN);
        if (accessToken == null) {
            return false;
        }

        const exp = this._tokenUtil.getValueInPayloadByKey("exp", accessToken);
        const isExpiredToken = Date.now() >= exp * 1000;
        if (isExpiredToken) {
            return false;
        }

        return true;
    }
}

export default AuthService;