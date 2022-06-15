import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import RocketCard from './components/RocketCard';
import { GetRocketAPI } from './redux/rockets/rockets';
import configureStore from './redux/configureStore';
import Missions from './components/Missions';

configureStore.dispatch(GetRocketAPI());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore}>
    <Router>
      <React.StrictMode>
        <Header />
        <Routes>
          <Route path="/" element={<RocketCard />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </Provider>,
);
