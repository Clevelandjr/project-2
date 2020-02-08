const require = require("require")
const express = require("express")
var app = express();
const axios = require('axios');

var yummy = response.totalNutrients;
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

  axios.get("cleveland", function (req, res){
    console.log('testing something right now')''
    // grab request query param || body param
    //res.render("recipes/nutrition", {});
    
    //db.Post.create({
    //  Calories: calories,
    //  Fat: fat,
    // Carbs: carbs,
    //  Fiber: fiber,
    //  Sugar: sugar,
    //  Protien: protien,
    //  Sodium: sodium,
    //  Calcium: calcium,
    //  Iron: iron,
    //  Zinc: zinc,
      
    }).then(function(results){
      res.json(results);
    });
  }
  )
}
