const db = require("../config/db");

class Post {
  
    static save(username, password, items) {
        let sql = `
        INSERT INTO posts(
            username,
            password,
            items
        )
        VALUES(
            "${username}",
            "${password}",
            '${JSON.stringify(items)}'
        )
        `;
        return db.execute(sql);
    }
    static update(items, username){
        let sql = `UPDATE posts SET items = '${JSON.stringify(items)}' WHERE username = '${username}';`;
        return db.execute(sql);
    }
}

module.exports = Post;