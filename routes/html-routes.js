var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If user is logged in default t"/stars
    if (req.user) {
      res.redirect("/stars");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If user is logged in default stars
    if (req.user) {
      res.redirect("/stars");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/stars", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stars.html"));
  });
};
