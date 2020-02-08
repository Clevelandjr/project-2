const require = require("require")
const express = require("express")
var app = express();
const axios = require('axios');

var calories = response.calories;
var fat = yummy.FAT.quantity;
var carbs = yummy.CHOCDF.quantity;
var fiber = yummy.FIBTG.quantity;
var sugar = yummy.SUGAR.quantity;
var protien = yummy.PROCNT.quantity;
var sodium = yummy.NA.quantity;
var calcium = yummy.CA.quantity;
var iron =yummy.FE.quantity;
var zinc = yummy.ZN.quantity

function getIngredients({Ingredient}) {
  const queryURL = `https://api.edamam.com/api/nutrition-data?app_id=7b0446a5&app_key=5221d18a089642fa6c1b4023c16a168c&ingr=${Ingredient}`;

  axios.get(queryURL)
  .then((response) => {
    console.log(calories);
    console.log(fat);
    console.log(carbs);
    console.log(fiber);
    console.log(sugar);
    console.log(protien);
    console.log(sodium);
    console.log(calcium);
    console.log(iron);
    console.log(zinc);
  });
  
  axios.get("nutrition", (req, res) =>{
    res.render("recipes/nutrition");
  });
  axios.post("nutrition", function (req, res){
    db.Post.create({
      title: req.body.title,
      category: req.body.category,
      cooktime: req.body.cooktime,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    }).then(function(results){
      res.json(results);
    });
  }
  )
}
