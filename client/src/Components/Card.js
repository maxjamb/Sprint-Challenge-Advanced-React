import React from "react";

const Card = props => {
  if (props.users !== null) {
    const { country, id, name, searches } = props.users;
    return (
      <div className="card">
        <h1 className="name">{name}</h1>
        <br />
        <p className="country">Country: {country}</p>
        <p className="searches">Searches: {searches}</p>
        <p className="id">ID: {id}</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-info">
          <h3 className="name">Loading...</h3>
        </div>
      </div>
    );
  }
};

export default Card;
