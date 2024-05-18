const db = require("../db")

async function insert(json) {
    let message = 'Error in inserting card';
    let colorIdArray = json.color_identity
    let color_identity = colorIdArray.length > 0 ? colorIdArray.reduce((acc, val) => acc += val) : ""
    let oracleText = json.oracleText.replace("\"", "\`")
    const sql = `INSERT INTO carta (
                                    scryfall_id,
                                    oracle_id,
                                    name,
                                    scryfall_uri,
                                    image_small,
                                    image_medium,
                                    image_large,
                                    image_png,
                                    mana_cost,
                                    cmc,
                                    type_line,
                                    oracle_text,
                                    color_identity
                                ) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    let values = [
        json.id, 
        json.oracle_id, 
        json.name, 
        json.scryfall_uri, 
        json.image_uris.small,
        json.image_uris.normal,
        json.image_uris.large,
        json.image_uris.png,
        json.mana_cost,
        json.cmc,
        json.type_line,
        json.oracle_text,
        color_identity
    ]
    const result = await db.promise().execute(sql, values);
    if (result[0].affectedRows) {
        message = 'Car inserted successfully!'
    }
    return message;
}

module.exports = insert;



