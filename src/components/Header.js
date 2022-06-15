import { NavLink } from 'react-router-dom';
import planetLogo from '../planet.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-title">
          <img src={planetLogo} width="40" height="40" alt="" />
          <p>Space Travelers&#39; Hub</p>
        </div>
        <div className="menu">
          <div className="Rockets">
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to="/">Rockets</NavLink>
          </div>
          <div className="Missions">
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to="/Missions">Missions</NavLink>
          </div>
          <div className="Profile">
            <NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to="/Profile">Profile</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
