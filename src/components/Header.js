import { NavLink } from 'react-router-dom';
import planetLogo from '../planet.png';

function Header() {
  return (
    <header className="header">
      <div>
        <img src={planetLogo} width="20" height="20" alt="" />
      </div>
      <nav className="nav">
        <div className="Rockets">
          Rockets
        </div>
        <div className="Missions">
          Missions
        </div>
        <div className="Profile">
          <NavLink activeClassName="active" to="/Profile">Profile</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
