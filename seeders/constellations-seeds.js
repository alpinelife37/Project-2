"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("Constellations", [
      {
        abbr: "And",
        name: "Andromeda",
        genitive: "Andromedae",
        en: "Andromeda (mythological character)"
      },
      {
        abbr: "Ant",
        name: "Antlia",
        genitive: "Antliae",
        en: "air pump"
      }
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Person", null, {});
  }
};
