
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var morgan = require("morgan");
var session = require("express-session");

var db = require("./models/index");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models/recipe");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Static directory
// app.use(express.static("public"));

// Routes
app.use(require("./controllers/staticController"));

// Sync schema
db.sequelize.syn({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`==> Server lisening at http://localhost:${PORT}/`)
        });
    });

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// // *********************************************************************************
// // Server.js - This file is the initial starting point for the Node/Express server.
// // *********************************************************************************

// /*
//  *  STEPS TO SEQUELIZE THE STAR WARS APP.
//  *  1. Install the sequelize and mysql2 npm packages.
//  *  2. Delete the orm from config. In your app folder, create a model folder
//  *     with a character.js file in the model
//  *  3. In character.js, model out the character table, as detailed
//  *     in the schema.sql file located in the root of this project directory.
//  *  4. Remove all references to the old orm file,
//  *     and replace it with character.js
//  *  5. Use Sequelize methods in place of the orm calls
//  *     to retrieve and insert data.
//  *  6. Update connection.js to use sequelize instead of the mysql package.
//  *
//  * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

// // Dependencies
// // =============================================================
// var express = require("express");
// var exphbs = require("express-handlebars");
// var morgan = require("morgan");
// var session = require("express-session");

// var db = require("./models/recipe");

// // Sets up the Express App
// // =============================================================
// const app = express();
// var PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory to be served
// app.use(express.static("app/public"));

// // View engine
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // Routes
// app.use(require("./controllers/staticController"));
// app.use("/todos", require("./controllers/todosController"));

// // Import routes and give the server access to them
// var routes = require('./routes/api-routes.js'); require('./routes/html-routes.js');

// app.use(routes);

// // app.listen(port);

// // // Starts the server to begin listening
// // // =============================================================
// // app.listen(PORT, function() {
// //   console.log("App listening on PORT " + PORT);
// // });

// // Sync Schema
// db.sequelize.sync({ force: process.env.NODE_ENV !== "production" })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`==> Server listening at http://localhost: ${PORT}/`)
//     });
//   });


