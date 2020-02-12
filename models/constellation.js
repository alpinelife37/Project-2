"use strict";
module.exports = (sequelize, DataTypes) => {
  const Constellation = sequelize.define(
    "Constellation",
    {
      abbr: DataTypes.STRING,
      name: DataTypes.STRING,
      genitive: DataTypes.STRING,
      en: DataTypes.STRING,
      timestamps: false
    },
    {}
  );
  Constellation.associate = function() {
    // associations can be defined here
  };
  return Constellation;
};
