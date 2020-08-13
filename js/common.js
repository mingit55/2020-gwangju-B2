location.getQueryString = function() {
    let idx = this.search.indexOf("?");
    let search = this.search.substr(idx + 1);
    return search.split("&").reduce((obj, item) => {
        let split = item.split("=");
        obj[split[0]] = split[1];
        return obj;
    }, {})
};