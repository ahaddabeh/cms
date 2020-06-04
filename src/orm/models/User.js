'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(20),
      field: "first_name"
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(20),
      field: "last_name"
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(60),
      field: "email",
    },
    isActive: {
      allowNull: true,
      type: DataTypes.TINYINT,
      field: "is_active",
      defaultValue: 1
    }
  }, {
    tableName: "users",
    underscored: true,
    timestamps: true,
    paranoid: true
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};