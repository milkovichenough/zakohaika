const { v4: uuidv4 } = require('uuid');

let places = [
    { id: uuidv4(), title: 'Place 1', description: 'Description 1', photoUrl: 'url1.jpg' },
    { id: uuidv4(), title: 'Place 2', description: 'Description 2', photoUrl: 'url2.jpg' },
];

const getPlaces = () => places;

const addPlace = ({ description, title, photoUrl }) => {
    const newPlace = {
        id: uuidv4(),
        title,
        description,
        photoUrl,
    };
    places.push(newPlace);
    return newPlace;
};

module.exports = { getPlaces, addPlace };
