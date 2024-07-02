import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Realtime from './pages/realtime';
import Review from './pages/review';
import Recruit from './pages/recruit';
import Support from './pages/support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review" element={<Review />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/realtime" element={<Realtime />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
