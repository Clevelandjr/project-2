// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Recipe = require("../models/recipe.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:recipe?", function(req, res) {
    if (req.params.recipe) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Recipe.findOne({
        where: {
          routeName: req.params.recipe
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Recipe.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var recipe = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = recipe.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Recipe.create({
      routeName: routeName,
      name: recipe.name,
      category: recipe.category,
      cookTime: recipe.cookTime,
      cookInstruct: recipe.cookInstruct
    });

    res.status(204).end();
  });
};
