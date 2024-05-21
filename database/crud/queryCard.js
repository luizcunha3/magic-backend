const db = require("../db")

async function queryCardById(id) {
    const sql = `SELECT * FROM carta WHERE carta.scryfall_id = "${id}"`;
    const [rows, fields] = await db.promise().query(sql);
    return rows
}

async function queryAllCards() {
    const sql = `SELECT * FROM carta`;
    const [rows, fields] = await db.promise().query(sql);
    return rows
}

module.exports = { queryCardById, queryAllCards };