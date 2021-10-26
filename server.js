var express = require("express");
var app = express();
var path = require("path");

var module = require('./public/js/modules.js');

app.use(express.static('public'));

app.set('view engine', '.hbs');
app.engine('.hbs', require('hbs').__express);

app.get("/", async (req, res) => {
    var currentComic = await module.getCurrentComic();;
    var nextComic = module.getNextComic(currentComic.num);
    var previousComic = module.getPreviousComic(currentComic.num)
    var randomComic = module.getRandomComic();

    res.render("index", {
        currentComic: currentComic,
        nextComic: nextComic,
        previousComic: previousComic,
        randomComic: randomComic
    });
});

app.get("/:id", async (req, res) => {
    let comic = await module.getQueriedComic(req.params.id)
    var nextComic = module.getNextComic(comic.num);
    var previousComic = module.getPreviousComic(comic.num);
    var randomComic = module.getRandomComic();

    res.render("index", {
        currentComic: comic,
        nextComic: nextComic,
        previousComic: previousComic,
        randomComic: randomComic
    });
})

var HTTP_PORT = process.env.PORT || 5000;
app.listen(HTTP_PORT, () => console.log(`Server started on port ${HTTP_PORT}`));