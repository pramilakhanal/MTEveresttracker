const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TreckerSchema = new Schema({
  name: { type: String, required: true },
  location: { 
    Lukla: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    Phakding: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    NamcheBazaar: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    Thami: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    Khumjung: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    Debuche: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    Pangboche: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    Dingboche: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    Lobuje: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    EverestBaseCamp: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    BaseCampOne: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    BaseCampTwo: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    BaseCampThree: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    BaseCampFour: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    Summit: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
  },
descending: {
  
  Summit: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },

    BaseCampFour: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },

    BaseCampThree: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },

    BaseCampTwo: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },
    BaseCampOne: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },

    EverestBaseCamp: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },

    Debuche: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },

    NamcheBazaar: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },

    Lukla: {
      checkedIn: { type: Boolean, required: true, default: false },
      checkedOut: { type: Boolean, required: true, default: false }
    },

  },



}, {collection: 'trecker'});


const Trecker = mongoose.model("Trecker", TreckerSchema);

module.exports = Trecker;
