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
        var wait = ms => new Promise(resolve => setTimeout(() => resolve(fetch(url)), ms));
        this.lastMessageTime = new Date().valueOf();
        return wait(delay).then(r => r.json());
    }

    getCard(params) {
        var requestUrl = this.baseUrl + "/cards/named";
        if (params.name) {
            requestUrl += "?exact=" + params.name;
        } else {
            throw TypeError("'name' argument required");
        }
        if (params.set) {
            requestUrl += "&set=" + params.set;
        }
        return this.sendRequest(requestUrl);
    }

}

export default Scryfall;
