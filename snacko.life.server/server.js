const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    Recipe = require("./api/model/recipe"),
    Tags = require("./api/model/tags"),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/snacko");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + " - 404 Not Found"})
});

const RecipeRoutes = require("./api/route/recipesRoutes");
const TagRoutes = require("./api/route/tagRoutes");
RecipeRoutes(app);
TagRoutes(app);

app.listen(port);

console.log("Snacko.life API server started on: " + port);


