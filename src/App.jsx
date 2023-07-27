import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {

  return (
      <div className="frame container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  )
}

export default App;
