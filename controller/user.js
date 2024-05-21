const userCardsDb = require("../database/crud/userCards");

async function getUserCards(userId) {
    return userCardsDb.queryUserCards(userId)
}

async function addUserCard({userId, locationId, cardId}) {
    return userCardsDb.addCardToUser({userId, locationId, cardId})
}

async function removeUserCard({userId, locationId, cardId}) {
    return userCardsDb.removeCardFromUser({userId, locationId, cardId})
}

module.exports = { getUserCards, addUserCard, removeUserCard }