import axios from "axios";

export default {
  // Gets all treckers
  getTreckers: function() {
    return axios.get("/api/trecker");
  },
  // Gets the trecker with the given id
  getTrecker: function(name) {
    return axios.get("/api/trecker/" + name);
  },
  
  
  // Saves a trecker to the database
  saveTrecker: function(treckerData) {
    return axios.post("/api/trecker", treckerData);
  }
};
