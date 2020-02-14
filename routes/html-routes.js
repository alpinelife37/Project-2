var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If user is logged in default to index
    if (req.user) {
      res.redirect("/signup");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/login", function(req, res) {
    // If user is logged in default to index
    if (req.user) {
      res.redirect("/signup");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
};
