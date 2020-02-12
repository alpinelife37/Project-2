const constellationJSON = require('../db/constellations.json');
// console.log(constellationJSON);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Constellations', [
      constellationJSON,
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Person', null, {});
  }
};

// module.exports = function(sequelize, DataTypes) {
//   const Constellation = sequelize.define("Constellation", {
//     abbr: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     genitive: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     en: {
//       type: DataTypes.STRING,
//       allowNull: true
//     }
//   });

//   Constellation.associate = function(models) {
//       Constellation.belongsTo(models.User, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };
//   return Constellation;
// };