'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(20),
        field: "first_name"
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(20),
        field: "last_name"
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(60),
        field: "email",
      },
      isActive: {
        allowNull: true,
        type: Sequelize.TINYINT,
        field: "is_active",
        defaultValue: 1
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
    return queryInterface.dropTable('users');
  }
};