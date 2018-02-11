class Scryfall {

    constructor() {
        this.baseUrl = "https://api.scryfall.com"
        this.messageQueue = [];
        this.lastMessageTime = 0;
    }

    sendRequest(url) {
        var delay = 0;
        var now = new Date().valueOf();
        if (now - this.lastMessageTime < 100) {
            delay = 100 - (now - this.lastMessageTime);
        };
        this.lastMessageTime = new Date().valueOf();
        return new Promise((resolve) => setTimeout(() => {
            return fetch(url);
        }, delay));
    }

    getCard(params) {
        var requestUrl = this.baseUrl + "/cards/named";
        if (params.name) {
            requestUrl += "?exact=" + params.name;
        } else {
            throw TypeError("'name' argument required");
        }
        if (params.setCode) {
            requestUrl += "&set=" + params.setCode;
        }
        return this.sendRequest(requestUrl);
    }

}

export default Scryfall;
