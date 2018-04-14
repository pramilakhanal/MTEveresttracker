const path = require('path');
const router = require("express").Router();
const apiRoutes = require("./api");
const cors = require('cors');

router.use(cors());
// API Routes
router.use(apiRoutes);


// If no API routes are hit, send the React app

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../everesttrekkerstraking/build/index.html"));
});

module.exports = router;
