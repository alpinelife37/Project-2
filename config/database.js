const Sequelize = require("sequelize");

//////////////////////////////////////////////////enter your user & password

module.exports = new Sequelize("star_db", "root", "si11y#b0y", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
