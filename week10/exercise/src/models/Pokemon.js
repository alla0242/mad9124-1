const { Schema } = require('mongoose');

const pokemonSchema = new Schema({
    // define pokemon here
    name: {
        type: String,
        required: true,
    },
    tp
})