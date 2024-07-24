require('dotenv').config()
const CONFIG = {
    port: (process.env.NODE_ENV === "production") ? process.env.PORT : 8100,
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