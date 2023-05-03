const db = require("../config/db");

class Get {
    static findById(id) {
        let sql = `SELECT * FROM posts WHERE username = '${id}';`;
        return db.execute(sql);
    }
}

module.exports = Get;