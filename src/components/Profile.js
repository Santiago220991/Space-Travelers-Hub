import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rocketlist = useSelector((state) => state.rocket);
  console.log(rocketlist);
  const newrocketlist = rocketlist.filter((element) => element.reserved === true);
  return (
    <div>
      <div>Missions</div>
      <div className="rockets-reserved-list">
        <p>Rockets</p>
        {newrocketlist.map((element) => (
          <div className="rocket-reserved" key={element.name}>{element.name}</div>))}
      </div>
    </div>
  );
};
export default Profile;
