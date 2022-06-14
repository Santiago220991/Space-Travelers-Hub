import PropTypes from 'prop-types';

function Mission(props) {
  const {
    name, description,
  } = props;
  return (
    <div className="row">
      <div className="column1 MissionName cell">{name}</div>
      <div className="column2 MissionDesc cell">{description}</div>
      <div className="column3 cell"><span className="ActiveMember">Active Member</span></div>
      <div className="column4 cell">
        <button type="button" className="LeaveMission">
          Leave Mission
        </button>
      </div>
    </div>
  );
}

export default Mission;

Mission.propTypes = { name: PropTypes.string.isRequired };
Mission.propTypes = { description: PropTypes.string.isRequired };
