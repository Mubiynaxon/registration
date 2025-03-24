

import React, { createContext, useState, useContext } from 'react';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  const removeUser = (email) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.email !== email));
  };

  return (
    <UsersContext.Provider value={{ users, addUser, removeUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  return useContext(UsersContext);
};
