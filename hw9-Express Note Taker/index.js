console.log('llets get down to business')

const express = require('express')
const path = require('path')

const app = express()
const PORT = 5500

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  