import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './website/Home/Home';

import './App.css';

/**
 * Application root: installs the router and global styles, and mounts the
 * single-page {@link Home} route at `/`. Must be rendered exactly once.
 */
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
