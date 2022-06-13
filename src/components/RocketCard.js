import React from 'react';
import './RocketCard.css';

const RocketCard = () => (
  <div className="rocket-card">
    <img className="img-rocket" src="#" alt="rocket" />
    <div>
      <p className="name-rocket">Name</p>
      <p className="info-rocket">Info</p>
      <button className="reserve-rocket" type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default RocketCard;
