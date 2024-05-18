const config = require('./config');
const mysql = require('mysql2');

const connection = mysql.createConnection({
   uri: `mysql://${config.db.DB_USERNAME}:${config.db.DB_PASSWORD}@${config.db.DB_HOST}/${config.db.NAME}?ssl={"rejectUnauthorized":false}`,
   multipleStatements: false
})

console.log("Connected to DB");

module.exports = connection;