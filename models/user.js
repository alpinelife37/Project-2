module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Constellation, {
      onDelete: "cascade"
    });
  };

  return User;
};
