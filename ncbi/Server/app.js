const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());

app.post("/dogo", (request, respose) =>{
    respose.send("Done");
} );


app.listen(4000, () => {
    console.log("Listening from server port 4000")
})