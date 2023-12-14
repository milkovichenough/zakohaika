import React, {useEffect, useState} from "react";
import {Place} from "../../types/Place";
import {getPlaces} from "../../api/api";

export const PlacesList = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const rows = Math.ceil(places.length / 3);
  const elements: JSX.Element[] = [];

  for (let i = 0; i < rows; i++) {
    elements.push(
      <div key={i} className="row">
        {places.slice(i * 3, i * 3 + 3).map(place => (
          <div key={place.id}  className="col-1-3">
            <div className="wrap-col">
              <article>
                <div className="post-thumbnail-wrap">
                  <a className="portfolio-box">
                  <img src={place.photoUrl} alt="" />
                  </a>
                </div>
                <div className="entry-header ">
                  <h3 className="entry-title">{place.title}</h3>
                  <div className="l-tags"><p>{place.description}</p></div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>);
  }

  useEffect(() => {
    getPlaces()
      .then((response => {
        setPlaces(response);
        console.log(response);
      }));
    }, []);
  return (
    <>
      {elements}
    </>
  );
};
