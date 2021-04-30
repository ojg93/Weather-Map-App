const fs = require('fs');
const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

 app.post('api/notes', (req, res) => {
   const data = 
    {   title:"",
        text:""
    }
    data.req.body.
    res.json(data)
})

 app.get('api/notes', (req, res) => res.readFile('/db.json', "uft8", function (err,data) {
    if (err) {
      return console.log(err);
    } 
    console.log(data);
}));
 
