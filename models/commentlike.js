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
      CommentLike.belongsTo(models.Comment, {foreignKey: 'commentId'})
      CommentLike.belongsTo(models.User, {foreignKey: 'userId'})
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
      onDelete: 'CASCADE',
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