import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
// Separate routes
import Advent2022Routes from './routes/Advent2022Routes';
import Advent2023Routes from './routes/Advent2023Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {Advent2022Routes}
          {Advent2023Routes}
          {/* Main Page */}
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

