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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
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
