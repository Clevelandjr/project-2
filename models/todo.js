// Model for todos/recipes

'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    title: {
      type: DataTypes.STRING,
      allowNull:false,

    ingredients: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }});

  ToDo.associate = function (models) {
    // associations can be defined here
  };

  return ToDo;
};

