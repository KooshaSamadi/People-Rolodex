import React from "react";
import "./card-list.style.css";

function CardList({ filteredPeople }) {
  return (
    <div className="container">
      <div className="row">
        {filteredPeople.map((person) => {
          const { id, name, email } = person;

          return (
            <div key={person.id} className="col-sm-12 col-md-4">
              <div className="card-container">
                <img
                  src={`https://robohash.org/${id}?set=set2&size=180x180`}
                  alt={`an image of ${name}`}
                />
                <h1>{name}</h1>
                <p>{email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
