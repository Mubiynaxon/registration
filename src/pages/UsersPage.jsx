

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UsersContext'; 

const UsersPage = () => {
  const { users, removeUser } = useUsers();
  const navigate = useNavigate();

  const handleLogoutAndRemove = (email) => {
    removeUser(email); 
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Registered Users</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.username} ({user.email})
              <button onClick={() => handleLogoutAndRemove(user.email)}>Logout</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;
