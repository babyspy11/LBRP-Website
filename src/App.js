import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Rules from './components/Rules';
import Characters from './components/Characters';
import JoinUs from './components/JoinUs';
// Remove the unused import
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/join" element={<JoinUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
