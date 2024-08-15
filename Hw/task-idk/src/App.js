import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityInfo from './CityInfo';
import LandmarkDetails from './LandmarkDetails';  
import OtherLandmarks from './OtherLandmarks';
import FamousLandmark from './FamousLandmark';
import CityPhotos from './CityPhotos';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<CityInfo />} />
            <Route path="/landmark/:id" element={<LandmarkDetails />} />  
            <Route path="/famous-landmark" element={<FamousLandmark />} />
            <Route path="/other-landmarks" element={<OtherLandmarks />} />
            <Route path="/photos" element={<CityPhotos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
