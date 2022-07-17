const express = require('express')
const app = express();
const cors = require('cors');
const mysql      = require('mysql');


const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'ab123',
  database : 'information',
  port : 3306
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results) {
  if (error){

    console.log(error)
  }
  console.log('The solution is:  ${results[0].solution} ');
});


app.use(cors());

app.post("/dogo", (request, respose) =>{
    respose.send("Done");
} );


app.listen(4000, () => {
    console.log("Listening from server port 4000")
})