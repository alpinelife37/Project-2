const express = require("express");

const router = express.Router();

// Import the constellation model to use its database functions.
const index = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  index.all(function(data) {
    const hbsObject = {
      constellations: data
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

// Export routes for app.js to use.
module.exports = router;
