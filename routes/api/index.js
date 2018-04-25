const router = require("express").Router();
const treckerRoutes = require("./trecker");

// trecker routes
router.use("/trecker", treckerRoutes);

module.exports = router;