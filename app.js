const express = require("express");
const exphbs = require("express-handlebars");
//const bodyParser = require("body-parser");
//const path = require("path");

// const db = require("./config/config.json");

db.authenticate()
  .then(() => console.log("Datebase connected on: http://localhost:" + PORT))
  .catch(err => console.log("Error: " + err));

const app = express();

app.get("/", (reg, res) => res.send("INDEX"));

const PORT = process.env.PORT || 5000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, console.log(`Server started on port ${PORT}`));
