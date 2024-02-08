const express = require('express');
const path = require('path');
const api = require('./routes/notes');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(api);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// turn on connection to db and server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);