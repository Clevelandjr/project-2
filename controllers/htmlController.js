// Static controllers for our pages without extra functionality. Functioning pages can be coded in their own 
// created controller folders ex: nutrition.handlebars should eventually link with a "nutritionController"

const express = require("express");
const router = express.Router();
// const db = require("../models");
// module.exports = function(router){
// index page directs users to either db side or api side of app
router.get("/", (req, res) => {
  res.render("index");
});





router.get("/nutrition", (req, res) => {
  res.render("nutrition");
});

//MOVED TO IT'S OWN CONTROLLER
// // db side of app that displays all recipes page 
// router.get("/all", (req, res) => {
//   res.render("all");
// });
// // imports all DB recipes to page
// router.get("/all", (req, res) => {
//   db.cRecipes.findAll()
//     .then(recipes => {
//       res.render("all", { recipes: recipes });
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// router.get("/create", (req, res) =>{
//   res.render("recipes/index");
// })

// // api side of app page
// router.get("/nutrition", (req, res) => {
//   res.render("nutrition");
// });


// // API calls listed below
// //
// //

// router.post("/api/post", function (req, res){
//   console.log("post data:");
//   console.log(req.body);
//   db.Post.create({
//     title: req.body.title,
//     category: req.body.category,
//     cooktime: req.body.cooktime,
//     ingredients: req.body.ingredients,
//     instructions: req.body.instructions
//   }).then(function(results){
//     res.json(results);
//   });
// });

// router.get("/api/post", function (req,res){
//   res.render("post");
//   var query = {};
//   if (req.query.title_id){
//     query.Tilteid = req.query.title_id
//   }
//   db.Post.findAll({
//     where: query,
//     include: [db.Title]
//   }).then(function(dbPost){
//     res.json(dbPost);
//   });
// });

// // searching all recipes
// router.get("/api/all", function (req,res){
//   db.Post.findAll({}).then(function(results){
//     res.json(results);
//   });
// });

// //post a new recipe
// router.post("/api/recipe", function(req, res){
//   console.log("POSTED");
//   db.Post.create(req.body).then(function(dbPost){
//     res.json(dbPost);
//   });
  
// });

module.exports = router;

// }

