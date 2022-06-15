import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import RocketCard from './RocketCard';
import Missions from './Missions';
import configureStore from '../redux/configureStore';

console.log(toHaveClass);

describe('Nav menu', () => {
  test('navigation to profile', () => {
    render(
      <Provider store={configureStore}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<RocketCard />} />
            <Route path="/Missions" element={<Missions />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Profile'));
    expect(screen.getByText('My Missions')).toHaveClass('rockets-list-title');
  });

  test('navigation to missions', () => {
    render(
      <Provider store={configureStore}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<RocketCard />} />
            <Route path="/Missions" element={<Missions />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Missions'));
    expect(screen.getByText('Mission')).toHaveClass('column1');
  });
});
