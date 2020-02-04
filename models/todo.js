// Model for todos/recipes

'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    title: DataTypes.STRING,
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});

  ToDo.associate = function (models) {
    // associations can be defined here
  };

  return ToDo;
};
