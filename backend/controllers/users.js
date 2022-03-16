const UserModel = require("../models/users");

/*  POST */
exports.newUser = async (req, res, next) => {
    try {
        let { userEmail, userPhoneNumber } = req.body;
        console.log([userEmail, userPhoneNumber])

        const newUser = await UserModel.create({
            userEmail,
            userPhoneNumber,
        });

        console.log(newUser)

        res.status(201).json({
            success: true,
            data: newUser,
        });
    } catch (error) {
        next(error);
    }
};

exports.newOrder = async (req, res, next) => {
    try {
        let { userId, products, pickupDate } = req.body;

        const user = await UserModel.findById(userId);

        user.orders.push({
            date: new Date(),
            pickupDate,
            products
        });
        user.save();

        res.status(201).json({
            success: true,
            data: user,
        });
    } catch (error) {
        next(error);
    }
};