module.exports = function(sequelize, DataTypes) {
    const Constellation = sequelize.define("constellations", {
      name: DataTypes.STRING,
      abbr: DataTypes.STRING,
      //origin: DataTypes.STRING,
      meaning: DataTypes.STRING
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
  

