import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Manually check if path is /about or /talks
  const isAboutActive = location.pathname === '/about' || location.pathname === '/talks';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Gunjan Kashyap</h1>
        <ul className="navbar-links">

          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Home
            </NavLink>
          </li>

          <li className="dropdown">
            <NavLink to="/about" className={isAboutActive ? "nav-item active" : "nav-item"}>
              About▾
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/about" className="dropdown-link">Overview</NavLink>
              <NavLink to="/talks" className="dropdown-link">Talks & Conferences</NavLink>
            </div>
          </li>

          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Experience
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Resume
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
