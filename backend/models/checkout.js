const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"],
    },
    userPhoneNumber: {
        type: String,
        required: [true, "Please provide a phone number"],
        unique: true,
        match: [/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/, "Please add a valid phone number"],
    },
    userCheckout: [
        {
            product: {
                type: String,
                required: [true, "Please add the wanted product type"]
            },
            number: {
                type: Number,
                required: [true, "Please add the wanted product number"]
            }
        }
    ]
});

module.exports = mongoose.model("Checkout", CheckoutSchema);