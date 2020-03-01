"use strict";
const mongoose = require("mongoose"),
    Tag = mongoose.model("Tags");

exports.list_all = function (req, res) {
    Tag.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.create = function (req, res) {
    const newTag = new Tag(req.body);
    newTag.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.show = function (req, res) {
    Tag.findById(req.params.tagId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update = function (req, res) {
    Tag.findOneAndUpdate({_id: req.params.tagId}, req.body, {new: true}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete = function (req, res) {
    Tag.remove({
        _id: req.params.tagId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({message: "Tag successfully deleted"});
    });
};

