const db = require("../database/db");
const insertCard = require("../database/crud/insertCard")

function addCardFromScryfall(id) {
    let baseUrl = "https://api.scryfall.com/cards/" + id
    return fetch(baseUrl)
        .then(data => data.json())
        .then(json => insertCard(json))
        .then(_ => {
            db.end()
            return null
        })
        .catch(err => {
            return err
        })
}

module.exports = {addCardFromScryfall}