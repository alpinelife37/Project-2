module.exports = function(sequelize, DataTypes) {
  console.log("IMPORT CONSTELLATION");
  let Constellation = sequelize.define("Constellation", {
    abbr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    genitive: {
      type: DataTypes.STRING,
      allowNull: true
    },
    en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  Constellation.associate = function(models) {
    Constellation.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Constellation;
};
