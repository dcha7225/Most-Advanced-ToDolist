const db = require("../config/db");

class Post {
    constructor(username, password, items){
        this.username = username;
        this.password = password;
        this.items = items;
    }
    save() {
        let sql = `
        INSERT INTO posts(
            username,
            password,
            items
        )
        VALUES(
            "${this.username}",
            "${this.password}",
            '${JSON.stringify(this.items)}'
        )
        `;
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM posts WHERE username = '${id}';`;
        return db.execute(sql);
    }

    static update(items, username){
        let sql = `UPDATE posts SET items = '${JSON.stringify(items)}' WHERE username = '${username}';`;
        return db.execute(sql);
    }
}

module.exports = Post;