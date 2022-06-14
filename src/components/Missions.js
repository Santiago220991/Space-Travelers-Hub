import { useSelector, shallowEqual } from 'react-redux';
import './Missions.css';
import Mission from './Mission';
import Store from '../redux/configureStore';
import { GetMissionsAPI } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions, shallowEqual);
  if (missions.length === 0) {
    Store.dispatch(GetMissionsAPI());
  }
  return (
    <div className="missions">
      <div className="titles">
        <div className="column1 cell">Mission</div>
        <div className="column2 cell">Description</div>
        <div className="column3 cell">Status</div>
        <div className="column4 cell">&nbsp;</div>
      </div>
      {missions.map((mission) => (
        <Mission
          key={mission.id}
          id={mission.id}
          name={mission.name}
          description={mission.description}
        />
      ))}
    </div>
  );
};

export default Missions;
