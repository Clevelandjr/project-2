const require = require("require")
const express = require("express")
var app = express();
const axios = require("axios");

axios({
    method:"GET",
    url:"https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data",
    headers:{
    content-type : application/octet-stream,
    x-rapidapi-host : "edamam-edamam-nutrition-analysis.p.rapidapi.com",
    x-rapidapi-key : "60474d2006msh95b12633cdbdb6cp14e4e8jsn1a865ef73770"
    },params:{
    ingr:"1 large apple"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })


    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });






    ///////////// another way option///
    const axios = require('axios');
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });const axios = require('axios');
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
  /////////////////////////////////////////////