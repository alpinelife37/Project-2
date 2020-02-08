const Sequelize = require('sequelize');

// ////////////////////////////////////////////////    enter your user & password

module.exports = new Sequelize('starGazer_db', 'root', '1982', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,

