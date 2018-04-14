const router = require("express").Router();
const treckerController = require("../../controllers/treckerController");
const cors = require('cors');
// Matches with "/api/trecker"
router.route("/api/")
  .get(treckerController.findAll)
  .post(treckerController.create);

// Matches with "/api/trecker/:id"
// router
//   .route("/api/trecker/:name", cors())
//   .get(treckerController.findById)
//   .put(treckerController.update)

router.get("/api/trecker/:name", cors(), (req, res) => {
	console.log('route hite');
	treckerController.findById(req.params.name,(data) => {
		// console.log('Data feromt he actual route', data)
		res.json(data);
	});
})  

module.exports = router;