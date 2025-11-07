import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './website/Home/Home';

import './App.css';
import ECSDemo from './ecs/ECSDemo';

export default function App() {
  return (
    <BrowserRouter>
      <div className='screen'>
        <div id='ecs-demo'>
          <ECSDemo transparency={0.2} />
        </div>
        <div className='app'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
