var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/", function(req, res) {
    Constellation.findAll(function(data) {
      const constObject = {
        constellation: data
      };
      console.log(constObject);
      res.render("index", constObject);
    });
  });

  app.get("/api/constellations", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Constellation.findAll({}).then(function(dbConstellation) {
      res.json(dbConstellation);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
