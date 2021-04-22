var mongoose = require("mongoose");
var db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true
});

var budgetSeed = [
    {
        name: " Cooler",
        value: 25,
        date: new Date(Date.now())
    },
    {
        name: "CD",
        value: 90,
        date: new Date(Date.now())
    },
    {
        name: "Earphones",
        value: 56,
        date: new Date(Date.now())
    },
    {
        name: "Telephone",
        value: 70,
        date: new Date(Date.now())
    }
]

db.Transaction.delete({})
