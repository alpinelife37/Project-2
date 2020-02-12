module.exports = function(sequelize, DataTypes) {
  const Constellation = sequelize.define("Constellations", {
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
    }
  });

  Constellation.associate = function(models) {
    Constellation.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Constellation;
};
