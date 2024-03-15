// Routers
const {Router} = require("express");
const route = Router();

// Main
route.get("/", function (req, res) {
    res.render('serverlist');
})

// Game: Minecraft 2
route.get('/mc2', (req, res) => {
    fetch("https://api.mcstatus.io/v2/status/java/theatrekids.uk")
    .then(async data => {
        let mc_info = await data.text();
        res.render('servers/mc2', {
            minecraft: JSON.parse(mc_info)
        });
    }).catch(err => {
        res.status(500);
        res.write(err);
        res.end();
    })  
});

// Export
module.exports = route;