'use strict';
module.exports = (sequelize, DataTypes) => {
  const ContentType = sequelize.define('ContentType', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(60),
      field: "title"
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING(255),
      field: "description"
    },
    isEditable: {
      allowNull: true,
      type: DataTypes.TINYINT,
      field: "is_editable",
      defaultValue: 0
    },
  }, {
    tableName: "content_types",
    underscored: true,
    timestamps: true,
    paranoid: true
  });
  ContentType.associate = function (models) {
    // associations can be defined here
  };
  return ContentType;
};