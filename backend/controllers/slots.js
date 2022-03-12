const SlotModel = require("../models/slots");

/*  GET */
exports.getSlots = async (req, res, next) => {
    try {

        let availableSlots = await SlotModel.find();

        res.status(201).json({
            success: true,
            data: availableSlots,
        });
    } catch (error) {
        next(error);
    }
};