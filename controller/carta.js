const db = require("../database/db");
const insertCard = require("../database/crud/insertCard")
const cardDb = require("../database/crud/queryCard");

function createCardSearchObject(cardData) {
    let colorIdArray = cardData.color_identity
    let color_identity = colorIdArray.length > 0 ? colorIdArray.reduce((acc, val) => acc += val) : ""
    return {
        "scryfall_id": cardData.id,
        "name": cardData.name,
        "scryfall_uri": cardData.scryfall_uri,
        "image_small": cardData.image_uris.small,
        "image_medium": cardData.image_uris.normal,
        "image_large": cardData.image_uris.large,
        "image_png": cardData.image_uris.png,
        "mana_cost": cardData.mana_cost,
        "cmc": cardData.cmc,
        "type_line": cardData.type_line,
        "oracle_text": cardData.oracle_text,
        "color_identity": color_identity
    }
}
function buildSearchResponse(json) {
    if(json.total_cards == 1) {
        return createCardSearchObject(json.data[0])
    } else {
        return json.data.map(card => createCardSearchObject(card))
    }
}
function queryCardFromDb(id) {
    return cardDb.queryCardById(id)
}
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

function queryCardByName(name) {
    let baseUrl = "https://api.scryfall.com/cards/search?q="
    let url = baseUrl + name
    return fetch(url)
        .then(data => data.json())
        .then(json => {       
            return buildSearchResponse(json)
        })
}

function queryCardFromScryfall(id) {
    let baseUrl = "https://api.scryfall.com/cards/" + id
    return fetch(baseUrl)
        .then(data => data.json())
}

function queryAllCards() {
    return cardDb.queryAllCards()
}

function addCardToDb(json) {
    return insertCard(json)
}


module.exports = { addCardToDb, queryCardFromScryfall, queryCardByName, queryCardFromDb, queryAllCards }