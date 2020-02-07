// recipe add page controller

const express = require("express");
const router = express.Router();
const db = require("../models");



router.get("/recipes", (req, res) => {
    res.render("index");
  });

router.get("/create", (req, res) =>{
    res.render("recipes/index");
  });

  router.post("/create", function (req, res){
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

// router.get("/all", (req, res) => {
//   res.render("all");
// });


// imports all DB recipes to page
// router.get("/all", (req, res) => {
//   db.cRecipes.findAll()
//     .then(recipes => {
//       res.render("all", { recipes: recipes });
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

//  router.post("/api/post", function (req, res){
//       console.log("post data:");
//       console.log(req.body);
//       db.Post.create({
//         title: req.body.title,
//         category: req.body.category,
//         cooktime: req.body.cooktime,
//         ingredients: req.body.ingredients,
//         instructions: req.body.instructions
//       }).then(function(results){
//         res.json(results);
//       });
//     });
    
//     router.get("/api/post", function (req,res){
//       res.render("post");
//       var query = {};
//       if (req.query.title_id){
//         query.Tilteid = req.query.title_id
//       }
//       db.Post.findAll({
//         where: query,
//         include: [db.Title]
//       }).then(function(dbPost){
//         res.json(dbPost);
//       });
//     });









// router.get("/recipes", (req, res) => {
//   db.cRecipes.findAll()
//     .then(recipes => {
//       res.render("recipes/index", { recipes: recipes });
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// router.post("/api/recipes", (req, res) => {
//   const { title } = req.body;

//   db.cRecipes.create({ title })
//     .then(newTodo => {
//       res.json(newTodo);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// router.put("/api/recipes/:id", (req, res) => {
//   const { id } = req.params;
//   const { isCompleted } = req.body;

//   db.cRecipes.update({ isCompleted: isCompleted }, { where: { id: id } })
//     .then(updatedToDo => {
//       res.json(updatedToDo);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// router.delete("/api/recipes/:id", (req, res) => {
//   const { id } = req.params;

//   db.cRecipes.destroy({ where: { id: id } })
//     .then(numDeleted => {
//       res.json(numDeleted);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;
