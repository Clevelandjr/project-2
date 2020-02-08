const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/ingredient', (req, res) => {
  console.log('req query params: ', req.query.ingredient);
  
  const queryURL = encodeURI(`https://api.edamam.com/api/nutrition-data?app_id=7b0446a5&app_key=5221d18a089642fa6c1b4023c16a168c&ingr=${req.query.ingredient}`);

  axios.get(queryURL)
    .then((response) => {
      res.render('nutrition', {
        calories: response.data.calories,
        fat: {
          label: response.data.totalNutrients.FAT.label,
          quantity: response.data.totalNutrients.FAT.quantity.toFixed(2)
        },
        chocdf: {
          label: response.data.totalNutrients.CHOCDF.label,
          quantity: response.data.totalNutrients.CHOCDF.quantity.toFixed(2)
        },
        fibtg: {
          label: response.data.totalNutrients.FIBTG.label,
          quantity: response.data.totalNutrients.FIBTG.quantity.toFixed(2)
        },
        sugar: {
          label: response.data.totalNutrients.SUGAR.label,
          quantity: response.data.totalNutrients.SUGAR.quantity.toFixed(2)
        },
        procnt: {
          label: response.data.totalNutrients.PROCNT.label,
          quantity: response.data.totalNutrients.PROCNT.quantity.toFixed(2)
        },
        na: {
          label: response.data.totalNutrients.NA.label,
          quantity: response.data.totalNutrients.NA.quantity.toFixed(2)
        },
        ca: {
          label: response.data.totalNutrients.CA.label,
          quantity: response.data.totalNutrients.CA.quantity.toFixed(2)
        },
        fe: {
          label: response.data.totalNutrients.FE.label,
          quantity: response.data.totalNutrients.FE.quantity.toFixed(2)
        },
        zn: {
          label: response.data.totalNutrients.ZN.label,
          quantity: response.data.totalNutrients.ZN.quantity.toFixed(2)
        },
        
      });
    });
});


module.exports = router;