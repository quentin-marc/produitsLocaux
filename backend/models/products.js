const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Please provide the product id (name)"],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, "Please provide the product's price"],
    },
    quantification: {
        type: String,
        required: [true, "Please provide the product's quantification"],
        enum: ["unité", "kg", "botte",]
    }
});

module.exports = mongoose.model("Product", ProductSchema);