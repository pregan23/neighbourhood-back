'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StreetLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StreetLike.belongsTo(models.User, {foreignKey: 'userId'})
    }
  }
  StreetLike.init({
    userId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull:false
    },
    streetId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'streets',
        key: 'id'
      },
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'StreetLike',
    tableName: 'streetlikes'
  });
  return StreetLike;
};