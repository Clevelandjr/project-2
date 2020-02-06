// recipe add page controller

// const express = require("express");
// const router = express.Router();

// const db = require("../models");

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
