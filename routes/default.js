// Routers
const {Router} = require("express");
const route = Router();

// Main
route.get("/", function (req, res) {
    res.render('home');
})

// Export
module.exports = route;