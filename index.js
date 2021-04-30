const fetch = require('node-fetch')

module.exports = class Google{
    /**
     * @param {String} search - this is What Do you want to search.
     * @param {String} key - A Valid google-search3 Api From RapidAPi.com
     */

    constructor(key){
        if(!key) throw new TypeError('Please Provide The API Key From RapidAPI.com');

        this.key = key;
    }

    search(search, callback){
        if(!search) throw new TypeError('Please Provide A Search That You want to search!!');
        if(typeof search != 'string') throw new TypeError('The Provided Search is not a String!!');

        const query = search.split(' ').join('%20');

        fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${query}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.key,
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                useQueryString: true
            }
        }).then(result => result.json()).then(res => {
            callback(res);
        }).catch(error => {callback(null)});
    }
    searchNews(search, callback){
        if(!search) throw new TypeError('Please Provide A Search That You want to search!!');
        if(typeof search != 'string') throw new TypeError('The Provided Search is not a String!!');

        const query = search.split(' ').join('%20');

        fetch(`https://google-search3.p.rapidapi.com/api/v1/news/q=${query}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.key,
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                useQueryString: true
            }
        }).then(result => result.json()).then(response => {
            const res = {
                feed: response.feed,
                entries: response.entries.slice(0, 10),
                ts: response.ts
            }

            callback(res);
        }).catch(error => {callback(null)});
    }
    searchImage(search, callback){
        if(!search) throw new TypeError('Please Provide A Search That You want to search!!');
        if(typeof search != 'string') throw new TypeError('The Provided Search is not a String!!');

        const query = search.split(' ').join('%20');

        fetch(`https://google-search3.p.rapidapi.com/api/v1/images/q=${query}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.key,
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                useQueryString: true
            }
        }).then(result => result.json()).then(res => {
            callback(res);
        }).catch(error => {callback(null)});
    }
}