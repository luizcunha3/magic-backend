const express = require('express')
const app = express()
const port = 3000

app.get('/oi', (req, res) => {
    let carta = {
        "name": "Sol Ring",
        "cost": "{2}"
    }
    res.send(carta)
})

//app.get(1param, 2parm)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


/**
 * /cards/{idCarta} -> ...../cards/1234
 */