import './Missions.css';

const Missions = () => (
  <div className="missions">
    <div className="titles">
      <div className="MissionName">Mission</div>
      <div className="MissionDesc">Description</div>
      <div className="MissionStatus">Status</div>
      <div className="MissionButton">&nbsp;</div>
    </div>
    <div className="row">
      <div className="MissionName">Thaicom</div>
      <div className="MissionDesc">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem
      </div>
      <div className="MissionStatus ActiveMember">Active Member</div>
      <div className="MissionButton"><button type="button" className="LeaveMission">Leave Mission</button></div>
    </div>
  </div>
);

export default Missions;
