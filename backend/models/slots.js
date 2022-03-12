const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
    day: {
        type: String,
        required: [true, "Please provide the day"],
        unique: true
    },
    date: {
        type: String,
        required: [true, "Please provide the date of the day"]
    },
    slots: [
            {
                type: String
            }
    ]
});

module.exports = mongoose.model("Slot", SlotSchema);