"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TagSchema = require("./tags").schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: "Please enter the name of the recipe."
    },
    body: {
        type: String,
        required: "Please enter a body for this recipe."
    },
    slug: {
        type: String,
        required: "Please enter a URL slug."
    },
    speed: {
        type: Number,
        min: 1,
        max: 5
    },
    difficulty: {
        type: Number,
        min: 1,
        max: 5
    },
    steps: [{
        type: String,
        required: "Please enter a step."
    }],
    ingredients: [
        {
            name: {type: String},
            amount: {type: String},
            unit: {type: String}
        }
    ],
    image: {type: String},
    tags: [{type:TagSchema}],
    Created_date: {
        type: Date,
        default: Date.now
    }
}, {_id: true});

module.exports = mongoose.model("Recipes", RecipeSchema, "snacks");