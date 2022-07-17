const express = require('express')
const app = express();
const cors = require('cors');
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'ab123',
  database: 'information',
  port: 3306
});

connection.connect();

app.use(cors());

app.get("/getAnimals", (request, response) => {
  response.send(connection.query('SELECT * from animal_information', (error, results) => {
    if (error) {

      response.send(error);
    }
    response.send(results);
  }));
});


app.listen(4000, () => {
  console.log("Listening from server port 4000")
})