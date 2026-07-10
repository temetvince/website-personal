import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './website/Home/Home';

import './App.css';

export default function App() {
  return (
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
  );
}
