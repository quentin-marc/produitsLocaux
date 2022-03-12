const UserModel = require("../models/users");

/*  POST */
exports.newUser = async (req, res, next) => {
    try {
        let { userEmail, userPhoneNumber } = req.body;

        const newUser = await UserModel.create({
            userEmail,
            userPhoneNumber,
        });

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
        let { userId, products } = req.body;

        const newOrder = UserModel.findByIdAndUpdate(
            userId,
            {
                $push: {
                    products: {
                        date: new Date(),
                        products
                    }
                }
            }
        );

        res.status(201).json({
            success: true,
            data: newOrder,
        });
    } catch (error) {
        next(error);
    }
};