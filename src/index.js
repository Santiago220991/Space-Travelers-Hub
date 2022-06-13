import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import RocketCard from './components/RocketCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<RocketCard />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </React.StrictMode>
  </Router>,
);
