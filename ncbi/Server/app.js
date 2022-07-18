const express = require('express')
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require("body-parser");


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'ab123',
  database: 'information',
  port: 3306
});

connection.connect();

app.post("/insert", (req, res) => {
  const type = req.body.type;
  const breed = req.body.breed;
  const span = req.body.span;
  const hair = req.body.hair;

  const query = 'INSERT INTO animal_information (animal_type, breed_name, life_span, hair_color) VALUES (?,?,?,?)';
  connection.query(query, [type, breed, span, hair], (error, results) => {
    if (error) {
      res.send(error)
    }
    res.send(results)
  });
});


app.get("/getAnimals", (request, response) => {
  const query = 'SELECT * from animal_information';
  connection.query(query, (error, results) => {
    if (error) {

      response.send(error);
    }
    console.log(results)
    response.send(results);
  });
});

app.put("/update/:animal_id", (req, res) => {
  const animal_id = req.params.animal_id;
  const type = req.body.type;
  const breed = req.body.breed;
  const span = req.body.span;
  const hair = req.body.hair;

  const query = 'UPDATE animal_information SET animal_type = ?, breed_name =?, life_span=?, hair_color=? WHERE animal_id = ?';
  connection.query(query, [type, breed, span, hair, animal_id], (error, results) => {
    if (error) {
      console.log(error)
      res.send(error)
    }
    console.log(results)
    res.send(results)
  });
});

app.delete("/delete/:animal_id", (req, res) => {
  const animal_id = req.params.animal_id;

  const query = 'DELETE FROM animal_information WHERE animal_id = ?';
  connection.query(query, animal_id, (error, results) => {
    if (error) {
      console.log(error)
      res.send(error)
    }
    console.log(results)
    res.send(results)
  });
});

app.get("/", (request, response) => {
  response.send("Done")
});


app.listen(4000, () => {
  console.log("Listening from server port 4000")
})