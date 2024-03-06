// Setup
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');

// Router
const logger = require("./logger");
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
app.set('views', path.join(__dirname, "../app/views"));

// Public Files
app.use(express.static(path.join(__dirname, "../app/public")));

// Logger
app.use(function (req, res, next) {
    logger.debug(`Request to ${req.url}.`);
    next();
})

// Main
app.get('/', (req, res) => {
    res.render('home');
});

// Blog
app.get('/blog', (req, res) => {
    res.render('blog');
});

// Games
app.get('/servers', (req, res) => {
    res.render('servers');
});
app.get('/servers/mc2', (req, res) => {
    fetch("https://api.mcstatus.io/v2/status/java/theatrekids.uk")
    .then(data => {
        data.text().then(mc => {
            res.render('servers/mc2', {
                minecraft: JSON.parse(mc)
            });
        }).catch(err2 => {
            res.status(500);
            res.write(err2);
            res.end();
        })
    }).catch(err => {
        res.status(500);
        res.write(err);
        res.end();
    })  
});

// Export Express
module.exports = app;