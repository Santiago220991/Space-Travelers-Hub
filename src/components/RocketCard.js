import React from 'react';
import './RocketCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { ReserveRocket } from '../redux/rockets/rockets';

const RocketCard = () => {
  const dispatch = useDispatch();
  const rocketlist = useSelector((state) => state.rocket);

  const reserve = (e) => {
    const rocketid = e.target.parentElement.parentElement.id;
    dispatch(ReserveRocket(rocketid));
  };

  return (
    rocketlist.map((element) => (
      <div className="rocket-card" key={element.id} id={element.id}>
        <img className="img-rocket" src={element.flickr_images} alt="rocket" />
        <div className="rocket-div">
          <p className="name-rocket">{element.name}</p>
          <p className="info-rocket">{element.info}</p>
          <button className="reserve-rocket" type="button" onClick={reserve}>Reserve Rocket</button>
        </div>
      </div>
    ))
  );
};
export default RocketCard;
