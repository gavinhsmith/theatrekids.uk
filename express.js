// Setup
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');

// Router
const logger = require("./libs/logger");
const app = express();

// Form Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars Engine
app.engine('hbs', engine({
    extname: ".hbs",
    defaultLayout: "main"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "./app/views"));

// Public Files
app.use(express.static(path.join(__dirname, "./app/public")));

// Logger
app.use(function (req, res, next) {
    logger.debug(`Request to ${req.url}.`);
    next();
})

// Main
app.use('/', require("./routes/default"));

// Blog
app.use('/blog', require("./routes/blog"));

// Games
app.use('/servers', require("./routes/games"));

// Export Express
module.exports = app;