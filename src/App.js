import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashbord from './Container/Dashbord';
import Navbar from './Container/Navbar'; // Importing Navbar component

function App() {
  return (
    <div>
      <Router>
        <Navbar /> {/* Including the Navbar component */}
        <Routes>
          <Route path="/" element={<Dashbord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
