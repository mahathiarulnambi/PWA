import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import Dashboard from './pages/Dashboard';


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Home /> : <Login onLogin={() => setLoggedIn(true)} />}
        />
        <Route
          path="/profile"
          element={loggedIn ? <Profile /> : <Navigate to="/" replace />}
        />
        <Route
          path="/about"
          element={loggedIn ? <About /> : <Navigate to="/" replace />}
        />
        <Route
          path="/dashboard"
          element={loggedIn ? <Dashboard /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
