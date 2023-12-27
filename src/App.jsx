import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Admin from './admin';
import Profile from './profile';
import Attendance from "./Attendance";

import Nested from "./Nested";

import Moderation from "./Moderation";


function App() {
  const [user, setUser] = useState({ isAuthenticated: false, role: '' });

  const handleLoginSuccess = (role) => {
    setUser({ isAuthenticated: true, role });
  };

  return (
    <Router>
      <Routes>
        <Route path="/Attendance" element={<Attendance />} />
          <Route path="/App" element={<App />} />
          <Route path="/Moderation" element={<Moderation />} />

        
          <Route path="/Nested" element={<Nested />} />
          <Route path="/App" element={<App />} />
        
        
        <Route path="/" element={
          user.isAuthenticated 
            ? (user.role === 'admin' ? <Navigate replace to="/admin" /> : <Navigate replace to="/profile" />)
            : <Login onLoginSuccess={handleLoginSuccess} />
        } />
        <Route
          path="/"
          element={
            !user.isAuthenticated ? (
              <Login onLoginSuccess={handleLoginSuccess} />
            ) : user.role === 'admin' ? (
              <Navigate replace to="/admin" />
            ) : (
              <Navigate replace to="/profile" />
            )
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
