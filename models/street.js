'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Street extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Street.belongsTo(models.User, {foreignKey: 'authorId'})
      Street.hasMany(models.Comment, {foreignKey: 'streetId'})
    }
  }
  Street.init({
    authorId: {
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }, 
    content: {
      type:DataTypes.STRING,
      allowNull: false
      },
    
    isEdited: DataTypes.BOOLEAN,
    defaultValue: false
  }, {
    sequelize,
    modelName: 'Street',
    tableName: 'streets'
  });
  return Street;
};