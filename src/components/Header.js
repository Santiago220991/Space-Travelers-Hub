import { NavLink } from 'react-router-dom';
import planetLogo from '../planet.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div>
        <img src={planetLogo} width="20" height="20" alt="" />
      </div>
      <nav className="nav">
        <div className="Rockets">
          <NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to="/">Rockets</NavLink>
        </div>
        <div className="Missions">
          Missions
        </div>
        <div className="Profile">
          <NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to="/Profile">Profile</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
