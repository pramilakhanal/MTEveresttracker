const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api/trecker");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}
// Add routes, both API and view
routes(app);
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB

app.get('/', (req, res) => {
	res.sendFile('build/index.html');
});
mongoose.connect(
  "mongodb://heroku_8xc08xkz:project3@ds259109.mlab.com:59109/heroku_8xc08xkz" || "mongodb://localhost/trecker"),
  // {
  //   // useMongoClient: true
  // }

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

