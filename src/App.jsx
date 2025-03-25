
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import UsersPage from './pages/UsersPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { UsersProvider } from './context/UsersContext'; 
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
    <UsersProvider>
      <Router>
        <Header user={user} onLogout={handleLogout} />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegistrationPage onRegister={handleLogin} />} />
            <Route path="/home" element={user ? <HomePage user={user} /> : <LoginPage />} />
            <Route path="/users" element={<UsersPage />} /> 
          </Routes>
        </div>
        <Footer />
      </Router>
    </UsersProvider>
  );
}

export default App;
