import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rocketlist = useSelector((state) => state.rocket);
  const newrocketlist = rocketlist.filter((element) => element.reserved === true);
  return (
    <div className="reserved-lists">
      <div>My Missions</div>
      <div className="rockets-reserved-list-container">
        <p className="rockets-list-title">My Rockets</p>
        <div className="rockets-reserved-list">
          {newrocketlist.map((element) => (
            <div className="rocket-reserved" key={element.name}>{element.name}</div>))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
