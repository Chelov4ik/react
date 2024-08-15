import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ShakespeareInfo from './ShakespeareInfo';
import FamousWorks from './FamousWorks';
import GlobeTheatre from './GlobeTheatre';
import Navbar from './Navbar';
import WorkDetail from './WorkDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shakespeare" element={<ShakespeareInfo />} />
            <Route path="/works" element={<FamousWorks />} />
            <Route path="/globe-theatre" element={<GlobeTheatre />} />
            <Route path="/works/:title" element={<WorkDetail />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
