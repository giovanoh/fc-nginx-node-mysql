const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql');
var random_name = require('node-random-name');

var connection = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root",
    port: 3306,
    database: "nodeapp"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    addRandomPerson();
    
    getPeople((err, result) => {
        if (err) throw err;
        let html = `<h1>Full Cycle Rocks!</h1>
                    <h3><b>Lista de nomes cadastrados no banco de dados:</b></h3>
                    <ul>`;
        result.forEach((person) => {
            html += `<li>${person.id} - ${person.name}</li>`;
        });
        html += `</ul>`;
        res.send(html);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

function addRandomPerson() {
    var sqlInsert = `insert into people (name) values ('${random_name()}')`;
    connection.query(sqlInsert, function (err, result) {
        if (err) throw err;
    });
}

function getPeople(callback) {
    connection.query("select * from people", function (err, result) {
        if (err) return callback(err, null);
        callback(null, result);
    });
}
