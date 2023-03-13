const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ean: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    allergens: {
        type: String,
        default: ''
    },
    ingredients: {
        type: String,
        default: ''
    },
    thumbnail: {
        type: String,
        default: ''
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;