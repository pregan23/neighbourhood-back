'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('streetlikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        allowNull:false
      },
      streetId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'streets',
          key: 'id'
        },
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('streetlikes');
  }
};