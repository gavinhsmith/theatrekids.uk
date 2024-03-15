// Routers
const {Router} = require("express");
const route = Router();

// Main
route.get("/", function (req, res) {
    res.render('blog');
})

// Export
module.exports = route;