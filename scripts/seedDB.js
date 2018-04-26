const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  "mongodb://heroku_8xc08xkz:project3@ds259109.mlab.com:59109/heroku_8xc08xkz" || "mongodb://localhost/trecker");

const treckerSeed = [
{
  name: "Eric Goldstein",
  
},
{
  name: "Pramila Khanal",

},
{
  name: "Jeffrey Phelps",

},
{
  name: "Dante Cardenes",
}
];

db.Trecker
  .remove({})
  .then(() => db.Trecker.insertMany(treckerSeed))
  .then(data => {
    console.log('hellow',data);
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });