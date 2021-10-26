const axios = require("axios");

module.exports.getCurrentComic = async() => {    
    try {
        const res = await axios.get("https://xkcd.com/info.0.json");
        return res.data;
    } catch (err) {
        return err;
    }
}

module.exports.getNextComic = (currentComic) => {
    return ++currentComic;
}

module.exports.getPreviousComic = (currentComic) => {
    return --currentComic;
}

module.exports.getRandomComic = () => {
    return Math.floor(Math.random() * 2500) + 1;
}

module.exports.getQueriedComic = async(id) => {
    try {
        const res = await axios.get("https://xkcd.com/" + id + "/info.0.json");
        return res.data;
    } catch (err) {
        return err;
    }
}