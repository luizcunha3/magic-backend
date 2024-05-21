const express = require('express')
const queryCard = require("./database/crud/queryCard");
const cardHandler = require("./controller/carta")
const userHandler = require("./controller/user")
const locationHandler = require("./controller/location")
const app = express()
const port = 3000

app.get('/busca/cards', async (req, res) => {
    let cards = await cardHandler.queryAllCards()
    res.send(cards).status(200)
})

app.get('/busca/nome/:name', async (req, res) => {
    let cardName = req.params.name
    let cards = await cardHandler.queryCardByName(cardName)
    res.send(cards).status(200)
})

app.get('/busca/user/:id', async (req, res) => {
    let userId = req.params.id
    let userCards = await userHandler.getUserCards(userId)
    res.send(userCards).status(200)
})

app.get('/busca/id/:id', async (req, res) => {
    let cardId = req.params.id
    let card = await cardHandler.queryCardFromDb(cardId)
    if (card.length == 0) {
        let scryfallCard = await cardHandler.queryCardFromScryfall(cardId)
        cardHandler.addCardToDb(scryfallCard)
        let card = await queryCard.queryCardById(cardId)
        res.send(card).status
    } else {
        res.send(card).status(200)
    }
})

app.get('/busca/local/:userId', async (req, res) => {
    let userId = req.params.userId
    let locations = await locationHandler.getUserLocations(userId)
    res.send(locations).status(200)
})

app.use(express.raw({ type: '*/*', limit: '10mb' }));

app.post("/remove/card", async (req, res) => {
    let reqBody = JSON.parse(req.body.toString('utf-8'))
    let changedRows = await userHandler.removeUserCard(reqBody)
    if(changedRows >= 1) {
        res.send(201)
    } else {
        res.send(500)
    }
})

app.post("/add/card", async (req, res) => {
    let reqBody = JSON.parse(req.body.toString('utf-8'))
    let changedRows = await userHandler.addUserCard(reqBody)
    if(changedRows != 1) {
        res.send(500)
    } else {
        res.send(201)
    }
})

app.post("/add/location", async (req, res) => {
    let reqBody = JSON.parse(req.body.toString('utf-8'))
    let changedRows = await locationHandler.addUserLocation(reqBody.userId, reqBody.locationName)
    if(changedRows != 1) {
        res.send(500)
    } else {
        res.send(201)
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
