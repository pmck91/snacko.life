"use strict";
module.exports = function (app) {
    const tagList = require("../controller/tagsController");

    // todoList Routes
    app.route("/tags")
        .get(tagList.list_all)
        .post(tagList.create);


    app.route("/tags/:tagId")
        .get(tagList.show)
        .put(tagList.update)
        .delete(tagList.delete);
};
