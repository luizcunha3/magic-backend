const express = require('express')
const insertCard = require("./database/crud/insertCard");
const queryCard = require("./database/crud/queryCard");
const cardHandler = require("./controller/carta")
const app = express()
const port = 3000

function createCardSearchObject(cardData) {
    return {
        "id": cardData.id,
        "name": cardData.name
    }
}
function buildSearchResponse(json) {
    if(json.total_cards == 1) {
        return createCardSearchObject(json.data[0])
    } else {
        return json.data.map(card => createCardSearchObject(card))
    }
}

app.get('/busca/nome/:name', (req, res) => {
    let baseUrl = "https://api.scryfall.com/cards/search?q="
    let cardName = req.params.name
    let url = baseUrl + cardName
    fetch(url)
        .then(data => data.json())
        .then(json => {       
            res.send(buildSearchResponse(json));
        })
})

app.get('/busca/id/:id', (req, res) => {
    queryCard(req.params.id)
    .then(result => {
        if(result.length == 0) {

        }
        res.sendStatus(200)
    })
})

app.get('/add/:id', (req, res) => {
    cardHandler.addCardFromScryfall(req.params.id)
    .then(err => {
        if(err) {
            res.send(err)
        } else { 
            res.send(200)
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


/**
 * /cards/{idCarta} -> ...../cards/1234
 */