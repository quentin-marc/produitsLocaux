const ProductModel = require("../models/products");

/*  GET */
exports.getProducts = async (req, res, next) => {
    try {

        let availableProducts = await ProductModel.find().sort( { id: 1 } );

        res.status(201).json({
            success: true,
            data: availableProducts,
        });
    } catch (error) {
        next(error);
    }
};