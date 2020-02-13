const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");

//const bodyParser = require("body-parser");
//const path = require("path");

// const db = require("./config/config.json");

// db.authenticate()
//   .then(() => console.log("Datebase connected on: http://localhost:" + PORT))
//   .catch(err => console.log("Error: " + err));

// app.get("/", (reg, res) => res.send("INDEX"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/constController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
