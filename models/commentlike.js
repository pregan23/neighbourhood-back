'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommentLike.init({
    userId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull:false
    },
    commentId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'comments',
        key: 'id'
      },
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'CommentLike',
    tableName: 'commentlikes'
  });
  return CommentLike;
};