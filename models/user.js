'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Street, {foreignKey: 'authorId'});
      User.hasMany(models.Comment, {foreignKey: 'authorId'});
      User.hasMany(models.StreetLike, {foreignKey:'userId'});
      User.hasMany(models.CommentLike, {foreignKey: 'userId'})
    }
  }
  User.init({
    firstName: {
      type:DataTypes.STRING,
      allowNull: false,
      },
    lastName: {
      type:DataTypes.STRING,
      allowNull: false,
      },
    zipcode: {
      type:DataTypes.INTEGER,
      allowNull: false,
      },
    age: DataTypes.INTEGER,
    userName: {
      type:DataTypes.STRING,
      allowNull: false,
        unique: true},
    passwordDigest: {
      type:DataTypes.STRING,
      allowNull: false,
      },
    avatar: {
      type: DataTypes.STRING,
      defaultValue:'https://icons.iconarchive.com/icons/google/noto-emoji-objects/1024/62895-closed-mailbox-with-raised-flag-icon.png',
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};