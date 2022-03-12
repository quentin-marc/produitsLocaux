const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
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
        match: "unité" || "kg" || "botte",
    }
});

module.exports = mongoose.model("Slot", SlotSchema);