// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function() {
  // save the character they typed into the character-search input
  var searchedRecipe = $("#recipe-search")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  searchedRecipe = searchedRecipe.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/" + searchedRecipe, function(data) {
    // log the data to our console
    console.log(data);
    // empty to well-section before adding new content
    $("#recipe-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
      $("#recipe-section").append("<h2> Your recipe was not found </h2>");
    }
    else {
      // otherwise
      // append the character name
      $("#recipe-section").append("<h2>" + data.name + "</h2>");
      // the role
      $("#recipe-section").append("<h3>Category: " + data.role + "</h3>");
      // the age
      $("#recipe-section").append("<h3>Required Cooking Time: " + data.cookTime + "</h3>");
      // and the force points
      $("#recipe-section").append("<h3>Cooking Instructions: " + data.cookInstruct + "</h3>");
    }
  });
});
