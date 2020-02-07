const express = require("express");
const router = express.Router();
const db = require("../models");

// db side of app that displays all recipes page
router.get("/all", (req, res) => {
    res.render("all");
  });
  // imports all DB recipes to page
  router.get("/all", (req, res) => {
    db.cRecipes.findAll()
      .then(recipes => {
        res.render("all", { recipes: recipes });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


  // API calls listed below
  //
  //
  
  router.post("/api/post", function (req, res){
    console.log("post data:");
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      category: req.body.category,
      cooktime: req.body.cooktime,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    }).then(function(results){
      res.json(results);
    });
  });
  
  router.get("/api/post", function (req,res){
    res.render("post");
    var query = {};
    if (req.query.title_id){
      query.Tilteid = req.query.title_id
    }
    db.Post.findAll({
      where: query,
      include: [db.Title]
    }).then(function(dbPost){
      res.json(dbPost);
    });
  });
  
  // searching all recipes
  router.get("/api/all", function (req,res){
    db.Post.findAll({}).then(function(results){
      res.json(results);
    });
  });
  
  //post a new recipe
  router.post("/api/recipe", function(req, res){
    console.log("POSTED");
    db.Post.create(req.body).then(function(dbPost){
      res.json(dbPost);
    });
    
  });
  
  module.exports = router;