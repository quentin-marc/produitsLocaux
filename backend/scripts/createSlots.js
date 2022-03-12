// This script fill slots in the DB.
// Example of use :
// >> node ./scripts/createSlots.js

const mongoose = require("mongoose");
const autoload = require("auto-load");

const config = require("../config/config.js");
autoload(`${__dirname}/../models`);

// Connect to MongoDB
console.info("Connecting to MongoDB.", config.database.uri);
mongoose.connect(config.database.uri);

const SlotModel = mongoose.model("Slot");

var listingSlots = [
    {
        day: "lundi",
        date: "14 / 03",
        slots: ["8h00", "9h00", "10h00", "11h00", "12h00"]
    },
    {
        day: "mardi",
        date: "15 / 03",
        slots: ["8h00", "9h00", "10h00", "11h00", "12h00"]
    },
    {
        day: "mercredi",
        date: "16 / 03",
        slots: ["8h00", "9h00", "10h00", "11h00", "12h00"]
    },
    {
        day: "jeudi",
        date: "17 / 03",
        slots: ["8h00", "9h00", "10h00", "11h00", "12h00"]
    },
    {
        day: "vendredi",
        date: "18 / 03",
        slots: ["8h00", "9h00", "10h00", "11h00", "12h00"]
    },
    {
        day: "samedi",
        date: "19 / 03",
        slots: ["8h00", "9h00", "10h00", "11h00", "12h00"]
    }
];

try {
    listingSlots.forEach(day => {
        new SlotModel({
            day: day.day,
            date: day.date,
            slots: day.slots
          }).save()
          .then(day => {
            console.info("Following code created successfully");
            console.info(day);
          })
          .catch(e => console.error(e)); 
    });
} catch (e) {
  console.error(e);
}