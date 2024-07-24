require('dotenv').config()
const CONFIG = {
    port: 8100,
    db_structs: {
        "users": {
            version: 0,
            data: []
        },
        "posts": {
            version: 0,
            data: []
        }
    }
}
module.exports = CONFIG;