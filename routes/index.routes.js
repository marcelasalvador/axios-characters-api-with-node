const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET details-character
router.get("/details-character", (req,res,next) =>{
res.render("details-character")

});
module.exports = router;
