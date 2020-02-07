const require = require("require")
const express = require("express")
var app = express();


const axios = require('axios');
const queryURL = "https://api.edamam.com/api/nutrition-data?app_id=7b0446a5&app_key=5221d18a089642fa6c1b4023c16a168c&ingr=" + ingredient 

axios.get(queryURL).then(response) {
  const yummy = response.totalNutrients;
  var calories = response.calories
  var fat = yummy.FAT.quantity;
  var carbs = yummy.CHOCDF.quantity;
  var fiber = yummy.FIBTG.quantity;
  var sugar = yummy.SUGAR.quantity;
  var protien = yummy.PROCNT.quantity;
  var sodium = yummy.NA.quantity;
  var calcium = yummy.CA.quantity;
  var iron =yummy.FE.quantity;
  var zinc = yummy.ZN.quantity

    console.log(response.data.url);
    console.log(response.data.explanation);
  }
  .catch(error => {
    console.log(error);
  });

    const nutritionSearch = () => {
      try {
        return axios.get(queryURL)
      } catch (error) {
        console.error(error)
      }
    }
    
    const countBreeds = async () => {
      const breeds = getNutrition()
        .then(response => {
          if (response.data.message) {
            console.log(
              `Got ${Object.entries(response.data.message).length} breeds`
            )
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
    
    nutritionSearch()
    axios.post(queryURL)

    axios.post(queryURL, {
  name: 'Flavio'
})




//////////////////////
var request = require("request");

var options = {
  method: 'GET',
  url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
  qs: {ingr: '1 large apple'},
  headers: {
    'x-rapidapi-host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
    'x-rapidapi-key': '60474d2006msh95b12633cdbdb6cp14e4e8jsn1a865ef73770'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});


