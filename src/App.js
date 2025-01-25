import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import MaterialSelection from './components/MaterialSelection';
import ConstructionSelection from './components/ConstructionSelection';
import Result from './components/Result';
import 'telegram-web-app-api';

import './App.css';

function App() {
  useEffect(() => {
    window.Telegram.WebApp.ready();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/materials" element={<MaterialSelection />} />
        <Route path="/construction" element={<ConstructionSelection />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
