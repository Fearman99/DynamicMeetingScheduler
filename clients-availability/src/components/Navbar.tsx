import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <Link className="brand" to="/">
          Dynamic Meeting Scheduler 
        </Link>
        <div className="links">
          <ul className="nav-items">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                User Panel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin Panel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
