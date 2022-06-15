import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ToggleMissionAction } from '../redux/missions/missions';

function Mission(props) {
  const dispatch = useDispatch();
  function ToggleMission(event) {
    const { id } = event.target.parentNode.parentNode;
    dispatch(ToggleMissionAction(id));
  }
  const {
    id, name, description, member,
  } = props;
  return (
    <div className="row" id={id}>
      <div className="column1 MissionName cell">{name}</div>
      <div className="column2 MissionDesc cell">{description}</div>
      {member && (
      <div className="column3 cell"><span className="ActiveMember">Active Member</span></div>
      )}
      {!member && (
      <div className="column3 cell"><span className="NotAMember">NOT A MEMBER</span></div>
      )}
      <div className="column4 cell">
        {member && (
        <button type="button" className="LeaveMission" onClick={ToggleMission}>
          Leave Mission
        </button>
        )}
        {!member && (
        <button type="button" className="JoinMission" onClick={ToggleMission}>
          Join Mission
        </button>
        )}
      </div>
    </div>
  );
}

export default Mission;

Mission.propTypes = { id: PropTypes.string.isRequired };
Mission.propTypes = { name: PropTypes.string.isRequired };
Mission.propTypes = { description: PropTypes.string.isRequired };
Mission.propTypes = { member: PropTypes.bool.isRequired };
