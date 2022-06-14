const GET_MISSIONS = 'GET_MISSIONS';
const TOGGLE_MISSION = 'TOGGLE_MISSION';
const URL = 'https://api.spacexdata.com/v3/missions';

const MissionsReducer = (state = [], action) => {
  const newstate = [];
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case TOGGLE_MISSION:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id !== action.payload) {
          newstate.push(state[i]);
        } else {
          newstate.push({ ...state[i], member: !state[i].member });
        }
      }
      console.log(action.payload, newstate);
      return newstate;
    default:
      return state;
  }
};

export const MissionsActionCreator = (missions) => ({
  type: GET_MISSIONS,
  payload: missions,
});

export const ToggleMissionAction = (id) => ({
  type: TOGGLE_MISSION,
  payload: id,
});

export const GetMissionsAPI = () => async (dispatch) => {
  const missions = [];
  const response = await fetch(URL);
  const jsonresponse = await response.json();
  jsonresponse.forEach((mission) => {
    missions.push({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      member: false,
    });
  });

  dispatch(MissionsActionCreator(missions));
};

export default MissionsReducer;
