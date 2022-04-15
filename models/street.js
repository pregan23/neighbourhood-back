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
      // define association here
    }
  }
  Street.init({
    authorId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    isEdited: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Street',
  });
  return Street;
};