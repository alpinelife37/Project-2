module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Author", {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
  
    User.associate = function(models) {
      User.hasMany(models.Constellations, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };