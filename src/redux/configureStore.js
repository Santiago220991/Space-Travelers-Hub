import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RocketReducer from './rockets/rockets';
import MissionsReducer from './missions/missions';

const Store = configureStore({
  reducer: {
    rocket: RocketReducer,
    missions: MissionsReducer,
  },
  middleware: [logger, thunk],
});

export default Store;
