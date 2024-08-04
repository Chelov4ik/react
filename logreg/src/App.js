import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Catalog from './Catalog';
import AboutUs from './AboutUs';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';

const App = () => {
  const [userEmail, setUserEmail] = useState(null);

  const handleLogin = (email) => {
    setUserEmail(email);
  };

  const handleLogout = () => {
    setUserEmail(null); 
  };

  return (
    <Router>
      <Header userEmail={userEmail} onLogout={handleLogout} />
      <div className="container mx-auto py-8 px-6">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
