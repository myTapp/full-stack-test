
class Token {

    getValueInPayloadByKey(key, token) {
        let payload = token.split(".")[1];
        payload = JSON.parse(atob(payload));
        return payload[key] || null;
    }
}

export default Token;