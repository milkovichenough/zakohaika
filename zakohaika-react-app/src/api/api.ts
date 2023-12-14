import {Place} from "../types/Place";

export const getPlaces = () => {
    return fetch('http://localhost:3001/places')
        .then(response => {
            return response.json();
        })
        .catch(err => {
            return err;
        });
}
