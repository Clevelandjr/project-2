// Model for recipes

module.exports = (sequelize, DataTypes) => {
  
  const cRecipes = sequelize.define('cRecipes', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    cooktime: DataTypes.INTEGER,
    ingredients: DataTypes.STRING,
    instructions: DataTypes.STRING
  }, {});

  return cRecipes;
};
