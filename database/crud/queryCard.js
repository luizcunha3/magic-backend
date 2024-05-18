const db = require("../db")
const cards = require("../../controller/carta");

async function query(id) {
    const sql = `SELECT * FROM carta WHERE carta.scryfall_id = "${id}"`;
    const [rows, fields] = await db.promise().query(sql);
    return rows
}

module.exports = query;



