

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import UsersPage from './pages/UsersPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { UsersProvider } from './context/UsersContext'; // Import UsersProvider
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UsersProvider> {/* Wrap your app with UsersProvider */}
      <Router>
        <Header user={user} onLogout={handleLogout} />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegistrationPage onRegister={handleLogin} />} />
            <Route path="/home" element={user ? <HomePage user={user} onLogout={handleLogout} /> : <LoginPage />} />
            <Route path="/users" element={<UsersPage />} /> {/* New Users page route */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </UsersProvider>
  );
}

export default App;
