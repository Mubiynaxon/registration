import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = ({ user, onLogout }) => {
  const navigate = useNavigate();

  

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>You're now logged in.</p>
    </div>
  );
};

export default HomePage;
