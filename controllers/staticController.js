// Static controllers for our pages without extra functionality. Functioning pages can be coded in their own 
// created controller folders ex: nutrition.handlebars should eventually link with a "nutritionController"

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/all", (req, res) => {
  res.render("all");
});

router.get("/nutrition", (req, res) => {
  res.render("nutrition");
});

module.exports = router;
