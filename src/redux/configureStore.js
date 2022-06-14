import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import RocketReducer from './rockets/rockets';
import MissionsReducer from './missions/missions';

const Store = configureStore({
  reducer: {
    rocket: RocketReducer,
    missions: MissionsReducer,
  },
  middleware: [thunk],
});

export default Store;
