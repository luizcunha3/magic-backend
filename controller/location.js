const userLocations = require("../database/crud/location");

async function getUserLocations(userId) {
    return userLocations.queryLocations(userId)
}

async function addUserLocation(userId, locationName) {
    return userLocations.createLocation(locationName, userId)
}

module.exports = { getUserLocations, addUserLocation }