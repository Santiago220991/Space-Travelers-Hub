const RESERVE = 'RESERVE';
const UNRESERVE = 'UNRESERVE';
const GET_ROCKET = 'GET_ROCKET';
const initState = [];
const URL = 'https://api.spacexdata.com/v3/rockets';

const RocketReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return action.payload;
    case RESERVE: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case UNRESERVE: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export const GetRocket = (list) => ({
  type: GET_ROCKET,
  payload: list,
});

export const ReserveRocket = (id) => ({
  type: RESERVE,
  payload: id,
});

export const UnreserveRocket = (id) => ({
  type: UNRESERVE,
  payload: id,
});

export const GetRocketAPI = () => async (dispatch) => {
  const rocketarr = [];
  const response = await fetch(URL);
  const responsearr = await response.json();
  responsearr.forEach((element) => (rocketarr.push({
    id: element.rocket_id,
    name: element.rocket_name,
    info: element.description,
    flickr_images: element.flickr_images[0],
  })));
  dispatch(GetRocket(rocketarr));
};

export default RocketReducer;
