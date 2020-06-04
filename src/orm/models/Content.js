'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    historyId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      field: "history_id",
      defaultValue: 0
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(60),
      field: "title"
    },
    subtitle: {
      allowNull: true,
      type: DataTypes.STRING(60),
      field: "subtitle"
    },
    content: {
      allowNull: true,
      type: DataTypes.TEXT,
      field: "content"
    },
    slug: {
      allowNull: true,
      type: DataTypes.STRING(60),
      field: "slug"
    },
    createdBy: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "created_by",
    },
    updatedBy: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "updated_by",
    }
  }, {
    tableName: "content",
    underscored: true,
    timestamps: true,
    paranoid: true
  });
  Content.associate = function (models) {
    // associations can be defined here
  };
  return Content;
};