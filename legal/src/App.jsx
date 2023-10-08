import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import SingleContent from './Components/SingleContent';

export const App = () => {
  console.log('im here');
  return (
    <Routes>
      <Route path='/legal' element={<Menu />} />
      <Route path='/legal/content/single' element={<SingleContent />} />
    </Routes>
  );
};
