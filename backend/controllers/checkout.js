const CheckoutModel = require("../models/checkout");

/*  POST */
exports.newCheckout = async (req, res, next) => {
    try {
        let { userEmail, userPhoneNumber, userCheckout } = req.body;

        const newCheckout = await CheckoutModel.create({
            userEmail,
            userPhoneNumber,
            userCheckout,
        });

        res.status(201).json({
            success: true,
            data: newCheckout,
        });
    } catch (error) {
        next(error);
    }
};