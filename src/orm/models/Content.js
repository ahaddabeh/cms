'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    historyId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      field: "history_id",
      defaultValue: 0
    },
    contentTypeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "content_type_id"
    },
    categoryId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      field: "category_id",
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
    directory: {
      allowNull: false,
      type: DataTypes.STRING(60),
      field: "directory"
    },
    filepath: {
      allowNull: true,
      type: DataTypes.STRING(120),
      field: "filepath"
    },
    layout: {
      allowNull: true,
      type: DataTypes.STRING(60),
      field: "layout",
    },
    view: {
      allowNull: true,
      type: DataTypes.STRING(60),
      field: "view",
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
    },
    isPermanent: {
      allowNull: true,
      type: DataTypes.TINYINT,
      field: "is_permanent",
      defaultValue: 0
    },
    isPublished: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      field: "is_published",
      defaultValue: false
    },
    publishedOn: {
      allowNull: true,
      type: DataTypes.DATE,
      field: "published_on"
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
  Content.addHook("beforeSave", (instance, options) => {
    instance.title = instance.title.replace(/\b[a-zA-z]/g, match => match.toUpperCase());
    instance.slug = `${instance.title.replace(/\s+/g, "-").toLowerCase()}`;
    instance.filepath = instance.directory + "/" + instance.slug;
  });
  return Content;
};