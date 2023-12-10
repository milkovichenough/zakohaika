const express = require('express');
const bodyParser = require('body-parser');
const placesApi = require('./api/places');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// GET request to retrieve all places
app.get('/places', (req, res) => {
    const places = placesApi.getPlaces();
    res.json(places);
});

// POST request to add a new place
app.post('/places', (req, res) => {
    const { description, title, photoUrl } = req.body;
    const addedPlace = placesApi.addPlace({ description, title, photoUrl });
    res.status(201).json(addedPlace);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
