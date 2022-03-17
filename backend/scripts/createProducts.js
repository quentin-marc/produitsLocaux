// This script fill products in the DB.
// Example of use:
// >> node ./scripts/createProducts.js

const mongoose = require("mongoose");
const autoload = require("auto-load");

const config = require("../config/config.js");
autoload(`${__dirname}/../models`);

// Connect to MongoDB
console.info("Connecting to MongoDB.", config.database.uri);
mongoose.connect(config.database.uri);

const products = [
    {
        id: "panier de produits locaux (fruits et légumes, 2p/1sem)",
        price: 20,
        quantification: "unité",
        image: "panier.svg"
    },
    {
        id: "lait cru",
        price: 1.5,
        quantification: "unité",
        image: "lait.svg"
    },
    {
        id: "carotte",
        price: 1.8,
        quantification: "kg",
        image: "carottes.svg"
    },
    {
        id: "courge",
        price: 1.6,
        quantification: "kg",
        image: "courge.svg"
    },
    {
        id: "céléri",
        price: 2.2,
        quantification: "kg",
        image: "celeri.svg"
    },
    {
        id: "chou",
        price: 1.6,
        quantification: "kg",
        image: "chou.svg"
    },
    {
        id: "blette",
        price: 2.2,
        quantification: "botte",
        image: "blettes.svg"
    },
    {
        id: "oignons blancs",
        price: 1.4,
        quantification: "kg",
        image: "oignons.svg"
    },
    {
        id: "poireaux",
        price: 2.2,
        quantification: "kg",
        image: "poireaux.svg"
    },
    {
        id: "navet",
        price: 1.8,
        quantification: "botte",
        image: "navet.svg"
    },
    {
        id: "salade",
        price: 1.5,
        quantification: "unité",
        image: "salade.svg"
    },
    {
        id: "pomme de terre",
        price: 2.2,
        quantification: "kg",
        image: "pdt.svg"
    },
    {
        id: "radis",
        price: 1.6,
        quantification: "botte",
        image: "radis.svg"
    },
    {
        id: "chou bruxelle",
        price: 3.2,
        quantification: "kg",
        image: "choux_bruxelle.svg"
    },
    {
        id: "pomme",
        price: 2.2,
        quantification: "kg",
        image: "pommes.svg"
    },
    {
        id: "pomme pour compote",
        price: 0.75,
        quantification: "kg",
        image: "pommes_compote.svg"
    },
    {
        id: "endive",
        price: 3.6,
        quantification: "kg",
        image: "endives.svg"
    },
    {
        id: "oeuf",
        price: 0.35,
        quantification: "unité",
        image: "oeufs.svg"
    },
    {
        id: "beurre (250g)",
        price: 3.7,
        quantification: "unité",
        image: "beurre.svg"
    },
    {
        id: "confiture",
        price: 3.6,
        quantification: "unité",
        image: "confiture.svg"
    },
];

const ProductModel = mongoose.model("Product");

try {
    mongoose.connection.once("open", function() {
        console.log("MongoDB connected successfully");
        mongoose.connection.db.dropCollection(
            "products",
            function(err, result) {
                console.log("Products droped");
                
                products.forEach(product => {
                    new ProductModel({
                        id: product.id,
                        price: product.price,
                        quantification: product.quantification,
                        image: product.image
                      }).save()
                      .then(product => {
                        console.info("Product added: " + product.id);
                      })
                      .catch(e => console.error(e)); 
                });
            }
        );
    });

} catch (e) {
  console.error(e);
}
