import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {

  return (
      <div className="frame container-fluid">
        <div className='app-container container-fluid h-100'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
  )
}

export default App;
