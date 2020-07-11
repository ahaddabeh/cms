'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('content', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      historyId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        field: "history_id",
        defaultValue: 0
      },
      contentTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "content_type_id"
      },
      categoryId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        field: "category_id",
        defaultValue: 0
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(60),
        field: "title"
      },
      subtitle: {
        allowNull: true,
        type: Sequelize.STRING(60),
        field: "subtitle"
      },
      content: {
        allowNull: true,
        type: Sequelize.TEXT,
        field: "content"
      },
      slug: {
        allowNull: true,
        type: Sequelize.STRING(60),
        field: "slug"
      },
      directory: {
        allowNull: false,
        type: Sequelize.STRING(60),
        field: "directory"
      },
      filepath: {
        allowNull: true,
        type: Sequelize.STRING(120),
        field: "filepath"
      },
      layout: {
        allowNull: true,
        type: Sequelize.STRING(60),
        field: "layout",
      },
      view: {
        allowNull: true,
        type: Sequelize.STRING(60),
        field: "view",
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "created_by",
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "updated_by",
      },
      isPermanent: {
        allowNull: true,
        type: Sequelize.TINYINT,
        field: "is_permanent",
        defaultValue: 0
      },
      isPublished: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        field: "is_published",
        defaultValue: false
      },
      publishedOn: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "published_on"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "updated_at"
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "deleted_at"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('content');
  }
};
