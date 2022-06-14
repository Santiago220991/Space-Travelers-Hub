import React from 'react';
import './RocketCard.css';
import { useSelector } from 'react-redux';

const RocketCard = () => {
  const rocketlist = useSelector((state) => state.rocket);
  return (
    rocketlist.map((element) => (
      <div className="rocket-card" key={element.id}>
        <img className="img-rocket" src={element.flickr_images} alt="rocket" />
        <div className="rocket-div">
          <p className="name-rocket">{element.name}</p>
          <p className="info-rocket">{element.info}</p>
          <button className="reserve-rocket" type="button">Reserve Rocket</button>
        </div>
      </div>
    ))
  );
};
export default RocketCard;
