//  const RESERVE = 'RESERVE';
//  const UNRESERVE = 'UNRESERVE';
const GET_ROCKET = 'GET_ROCKET';
const initState = [];
const URL = 'https://api.spacexdata.com/v3/rockets';

const RocketReducer = (state = initState, action) => {
  switch (action) {
    case GET_ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export const GetRocket = (list) => ({
  type: GET_ROCKET,
  payload: list,
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
  console.log(rocketarr);
};

export default RocketReducer;
