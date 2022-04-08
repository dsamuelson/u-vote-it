const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Int3rn3t!',
        database:'election'
    },
    console.log('connected to the election database')
);

module.exports = db;