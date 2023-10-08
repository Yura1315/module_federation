import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Menu from './Components/Menu';
import Legal from './Components/Legal';

export const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Menu />
      <div style={{ width: '100%' }}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/test' element={<div>das</div>} />
          <Route path='/legal/*' element={<Legal />} />
        </Routes>
      </div>
    </div>
  );
};
