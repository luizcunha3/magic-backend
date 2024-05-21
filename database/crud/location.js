const db = require("../db")

async function queryLocations(id) {
    const sql = `SELECT * FROM local WHERE local.id_usuario = "${id}"`;
    const [rows, fields] = await db.promise().query(sql);
    return rows
}

async function createLocation(locationName, userId) {
    const sql = `INSERT INTO local (nome, id_usuario) VALUES (?, ?)`
    let values = [
        locationName,
        userId,
    ]
    const result = await db.promise().execute(sql, values);
    return result[0].affectedRows
}

module.exports = { queryLocations, createLocation }