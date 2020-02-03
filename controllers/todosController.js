// controller specifically for the todos/recipe add page

const express = require("express");
const router = express.Router();

const db = require("../models/index");

router.get("/todos", (req, res) => {
  db.ToDo.findAll()
    .then(todos => {
      res.render("todos/index", { todos: todos });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/api/todos", (req, res) => {
  const { title } = req.body;

  db.ToDo.create({ title })
    .then(newTodo => {
      res.json(newTodo);
    })
    .catch(err => {
      res.status(500).json(err);
    });
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
