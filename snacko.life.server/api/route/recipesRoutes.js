"use strict";
module.exports = function (app) {
    const recipeList = require("../controller/recipesController");

    // todoList Routes
    app.route("/recipes")
        .get(recipeList.list_all)
        .post(recipeList.create);


    app.route("/recipes/:recipeId")
        .get(recipeList.show)
        .put(recipeList.update)
        .delete(recipeList.delete);
};
