"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TagSchema = new Schema({
    name: {
        type: String,
        required: "Please enter the name of the tag."
    },
}, {_id: true});

module.exports = mongoose.model("Tags", TagSchema, "tags");