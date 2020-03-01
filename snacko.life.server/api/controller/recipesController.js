"use strict";
const mongoose = require("mongoose"),
    Recipe = mongoose.model("Recipes");

exports.list_all = function (req, res) {
    Recipe.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.create = function (req, res) {
    const newRecipe = new Recipe(req.body);
    newRecipe.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.show = function (req, res) {
    Recipe.findById(req.params.recipeId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update = function (req, res) {
    Recipe.findOneAndUpdate({_id: req.params.recipeId}, req.body, {new: true}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete = function (req, res) {
    Recipe.remove({
        _id: req.params.recipeId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({message: "Recipe successfully deleted"});
    });
};

