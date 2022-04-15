'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('streets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      authorId:
        {
          type:Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'users',
            key: 'id'
          }
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isEdited: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('streets');
  }
};