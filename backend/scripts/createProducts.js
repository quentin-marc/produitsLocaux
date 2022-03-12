const mongoose = require("mongoose");
const autoload = require("auto-load");

const config = require("../config/config.js");
autoload(`${__dirname}/../models`);

// Connect to MongoDB
console.info("Connecting to MongoDB.", config.database.uri);
mongoose.connect(config.database.uri);

const products = [
    {
        id: "lait cru",
        price: 1.5,
        quantification: "unité"
    },
    {
        id: "carotte",
        price: 1.8,
        quantification: "kg"
    },
    {
        id: "courge",
        price: 1.6,
        quantification: "kg"
    },
    {
        id: "céléri",
        price: 2.2,
        quantification: "kg"
    },
    {
        id: "chou",
        price: 1.6,
        quantification: "kg"
    },
    {
        id: "blette",
        price: 2.2,
        quantification: "botte"
    },
    {
        id: "oignons blancs",
        price: 1.4,
        quantification: "kg"
    },
    {
        id: "poireaux",
        price: 2.2,
        quantification: "kg"
    },
    {
        id: "navet",
        price: 1.8,
        quantification: "botte"
    },
    {
        id: "salade",
        price: 1.5,
        quantification: "unité"
    },
    {
        id: "pomme de terre",
        price: 2.2,
        quantification: "kg"
    },
    {
        id: "radi",
        price: 1.6,
        quantification: "botte"
    },
    {
        id: "chou bruxelle",
        price: 3.2,
        quantification: "kg"
    },
    {
        id: "pomme",
        price: 2.2,
        quantification: "kg"
    },
    {
        id: "pomme pour compote",
        price: 0.75,
        quantification: "kg"
    },
    {
        id: "endive",
        price: 3.6,
        quantification: "kg"
    },
    {
        id: "oeuf",
        price: 0.35,
        quantification: "unité"
    },
    {
        id: "beurre (250g)",
        price: 3.7,
        quantification: "unité"
    },
    {
        id: "confiture",
        price: 3.6,
        quantification: "unité"
    },
];

// This script fill products in the DB.
// Example of use:
// >> node ./scripts/createProducts.js

const ProductModel = mongoose.model("Product");

try {
    products.forEach(product => {
        new ProductModel({
            id: product.id,
            price: product.price,
            quantification: product.quantification
          }).save()
          .then(product => {
            console.info("Following code created successfully");
            console.info(product);
          })
          .catch(e => console.error(e)); 
    });
} catch (e) {
  console.error(e);
}
