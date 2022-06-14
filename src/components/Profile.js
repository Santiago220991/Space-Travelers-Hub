import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rocketlist = useSelector((state) => state.rocket);
  const newrocketlist = rocketlist.filter((element) => element.reserved === true);
  const missions = useSelector((state) => state.missions);
  const joinedmissions = missions.filter((mission) => mission.member === true);
  return (
    <div className="reserved-lists">
      <div className="rockets-reserved-list-container">
        <p className="rockets-list-title">My Missions</p>
        <div className="rockets-reserved-list">
          {joinedmissions.map((mission) => (
            <div className="rocket-reserved" key={mission.id}>{mission.name}</div>))}
        </div>
      </div>
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
