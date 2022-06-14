const GET_MISSIONS = 'GET_MISSIONS';
const URL = 'https://api.spacexdata.com/v3/missions';

const MissionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export const MissionsActionCreator = (missions) => ({
  type: GET_MISSIONS,
  payload: missions,
});

export const GetMissionsAPI = () => async (dispatch) => {
  const missions = [];
  console.log('pasé por aquí');
  const response = await fetch(URL);
  const jsonresponse = await response.json();
  console.log('pasé por acá');
  jsonresponse.forEach((mission) => {
    missions.push({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    });
  });

  dispatch(MissionsActionCreator(missions));
};

export default MissionsReducer;
