var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var Constellation = require("../models/constellations.js");
const User = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Constellation.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/users", function(req, res) {
  User.create(
    ["name", "email", "password"],
    [req.body.name, req.body.email, req.body.passowrd],
    function(result) {
      res.json({ id: result.insertId });
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
