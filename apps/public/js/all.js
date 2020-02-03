// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character
$.get("/api", function(data) {

  // for each character that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var recipeSection = $("<div>");
    // add a class to this div: 'well'
    recipeSection.addClass("well");
    // add an id to the well to mark which well it is
    recipeSection.attr("id", "recipe-well-" + i);
    // append the well to the well section
    $("#recipe-section").append(recipeSection);

    // Now add all of our character data to the well we just placed on the page

    // make the name an h2,
    $("#recipe-well-" + i).append("<h2>" + data[i].name + "</h2>");
    // the role an h3,
    $("#recipe-well-" + i).append("<h3>Category: " + data[i].category + "</h4>");
    // the age an h3,
    $("#recipe-well-" + i).append("<h3>Required Cooking Time: " + data[i].cookTime + "</h4>");
    // and the forcepoints an h3.
    $("#recipe-well-" + i).append("<h3>Cooking Instructions: " + data[i].cookInstruct + "</h4>");
  }
});
