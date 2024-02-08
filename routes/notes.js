const notes = require('express').Router();
const fs = require('fs');
const {v4:uuidv4} = require('uuid');

let db = require('../db/db.json')
notes.get('/api/notes', (req, res) => {
    res.json(db)
});

notes.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db);
});


module.exports = notes;