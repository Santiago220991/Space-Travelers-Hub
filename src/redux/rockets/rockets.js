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
  paload: list,
});

export const GetRocketAPI = () => async () => {
  //  const rocketarr = [];
  const response = await fetch(URL);
  const responsearr = await response.json();
  console.log(responsearr);
};

export default RocketReducer;
