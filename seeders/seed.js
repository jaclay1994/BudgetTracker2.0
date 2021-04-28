var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://root:root@cluster0.arnvm.mongodb.net/budget", {
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
];

db.Transaction.createIndexes({})
    .then(() => db.Transaction.collection.insertMany(budgetSeed))
    .then(data => {
        console.log(data.result.n + "record inserted.")
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });