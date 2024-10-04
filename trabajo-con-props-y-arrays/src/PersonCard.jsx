import React from 'react';
import './PersonCard.css';

const PersonCard = ({ id, name, username, email }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>id: {id}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default PersonCard;
