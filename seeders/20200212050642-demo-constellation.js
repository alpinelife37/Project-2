"use strict";

const constellationJSON = require("../db/constellations.json");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("Constellations", constellationJSON);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Person", null, {});
  }
};
