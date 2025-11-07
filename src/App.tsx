import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './website/Home/Home';

import './App.css';
import ECSDemo from './ecs/ECSDemo';

export default function App() {
  return (
    <div className='screen'>
      <div id='ecs-demo'>
        <ECSDemo transparency={0.2} />
      </div>
      <BrowserRouter>
        <div className='app'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
