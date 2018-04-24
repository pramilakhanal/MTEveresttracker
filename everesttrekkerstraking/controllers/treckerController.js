const db = require("../models");
const ObjectId = require('mongodb').ObjectID;

module.exports = {
  findAll: function(cb, fn) {
    // console.log(req.query);
    db.Trecker
      .find()
      .then(dbModel => fn(dbModel, cb));
      
  },
   findById: function(name, fn) {
    this.findAll(fn, (data, cb) => {
      console.log('Here is our sdata', data)
      let foundRecord;
      for(let record of data) {
        console.log(record.name, name);
        if(record.name.toLowerCase() === name.toLowerCase()) {
          foundRecord = record;
        }
      }
      console.log("the record we found", foundRecord);
      cb(foundRecord);
    });

  //   db.Trecker
  //     .find(req.params.name)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
   },
  create: function(req, res) {
    db.Trecker
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(' he controllerHere is our body int', req.body);
    console.log('user id', req.body._id );
    db.Trecker
      .findOneAndUpdate({name: req.body.name}, {$set: {location: req.body.location, descending: req.body.descending}})
      .then(dbModel => {
        console.log('dbmodel', dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));   
      
    //  db.Trecker 
    // .findOneAndUpdate({name: req.body.name}, {$set: {location: req.body.descending}})
    //   .then(dbModel => {
    //     console.log('dbmodel', dbModel);
    //     res.json(dbModel)
    //   })
    //   .catch(err => res.status(422).json(err));   
      
 },

 };
