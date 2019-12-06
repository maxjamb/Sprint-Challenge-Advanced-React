import React from "react";

const Card = props => {
  if (props.users !== null) {
    const { country, id, name, searches } = props.users;
    return (
      <div className="card">
        <h3 className="name">{name}</h3>
        <p className="country">{country}</p>
        <p className="searches">{searches}</p>
        <p className="id">{id}</p>
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
