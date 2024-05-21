const db = require("../db")

async function queryUserCards(id) {
    const sql = `SELECT * FROM user_cards WHERE user_id = "${id}"`;
    const [rows, fields] = await db.promise().query(sql);
    return rows
}

async function addCardToUser({userId, locationId, cardId}) {
    const sql = `INSERT INTO usuario_carta (id_usuario, id_carta, id_local) VALUES (?, ?, ?)`
    let values = [
        userId,
        cardId,
        locationId
    ]
    const result = await db.promise().execute(sql, values);
    return result[0].affectedRows
}

async function removeCardFromUser({userId, locationId, cardId}) {
    const sql = `DELETE FROM usuario_carta WHERE (id_usuario = ?) AND (id_carta = ?) AND (id_local = ?)`
    let values = [
        userId,
        cardId,
        locationId
    ]
    const result = await db.promise().execute(sql, values);
    return result[0].affectedRows
}

module.exports = { queryUserCards, addCardToUser, removeCardFromUser };