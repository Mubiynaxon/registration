import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>My Website</h1>
        </div>
        <div className="nav-links">
          {!user ? (
            <>
              <Link to="/">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <Link to="/home">Home</Link>
              <Link to="/users">Users</Link>
              <button className="logout-btn" onClick={onLogout}>Logout</button>

            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
