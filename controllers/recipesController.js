const express = require("express");
const router = express.Router();

const db = require("../models/index");

router.get("/recipes", (req, res) => {
  db.ToDo.findAll()
    .then(todos => {
      res.render("recipes/index", { todos: todos });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/api/todos", (req, res) => {
  // const { title } = req.body;

  db.ToDo.create({ 
    title: req.body.title,
      category: req.body.category,
      cooktime: req.body.cooktime,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions})
    .then(newTodo => {
      res.json(newTodo);
    })
    .catch(err => {
      res.status(500).json(err);
    });

  // const { ingredients } = req.body;

  // db.ToDo.create({ ingredients })
  //   .then(newTodo => {
  //     res.json(newTodo);
  //   })
  //   .catch(err => {
  //     res.status(500).json(err);
  //   });
  //   const { instructions } = req.body;

  // db.ToDo.create({ instructions })
  //   .then(newTodo => {
  //     res.json(newTodo);
  //   })
  //   .catch(err => {
  //     res.status(500).json(err);
  //   });
});

router.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { isCompleted } = req.body;

  db.ToDo.update({ isCompleted: isCompleted }, { where: { id: id } })
    .then(updatedToDo => {
      res.json(updatedToDo);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  db.ToDo.destroy({ where: { id: id } })
    .then(numDeleted => {
      res.json(numDeleted);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;