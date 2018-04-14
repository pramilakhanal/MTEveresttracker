const db = require("../models");


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
    db.Trecker
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

 };
