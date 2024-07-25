// Routers
const {Router} = require("express");
const route = Router();

// Main
route.get("/", function (req, res) {
    res.render('serverlist');
})

// Game: TKM2
route.get('/tkm2', (req, res) => {
    fetch("https://api.mcstatus.io/v2/status/java/smp.theatrekids.uk")
    .then(async data => {
        let mc_info = await data.text();
        res.render('servers/tkm2', {
            minecraft: JSON.parse(mc_info)
        });
    }).catch(err => {
        res.status(500);
        res.write(err);
        res.end();
    })  
});

// Game: TKMB
route.get('/tkmb', (req, res) => {
    res.render('servers/tkmb');
});

// Export
module.exports = route;