const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TreckerSchema = new Schema({
  name: { type: String, required: true },
  location: { 
  	stationOne: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationTwo: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationThree: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationFour: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationFive: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationSix: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationSeven: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationEight: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationNine: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationTen: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationEleven: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationTweleve: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationThirteen: {
  		checkedIn: false,
  		checkedOut: false
  	},
  	stationFourteen: {
  		checkedIn: false,
  		checkedOut: false
  	},
  },
}, {collection: 'trecker'});

const Trecker = mongoose.model("Trecker", TreckerSchema);

module.exports = Trecker;
