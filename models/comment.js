'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {foreignKey: 'authorId'});
      Comment.belongsTo(models.Street, {foreignKey: 'streetId'})
      Comment.hasMany(models.CommentLike, {foreignKey: 'commentId'})
    }
  }
  Comment.init({
    authorId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    content: {
      type:DataTypes.STRING,
      allowNull: false
      },
    streetId: {
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'streets',
        key: 'id'
      }
    },
    isEdited: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
  }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
  });
  return Comment;
};