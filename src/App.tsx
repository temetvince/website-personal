import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ArtGrid from './components/ArtGrid/ArtGrid';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/art-grid'
          element={<ArtGrid />}
        />
      </Routes>
    </BrowserRouter>
  );
}
