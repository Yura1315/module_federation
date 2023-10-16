import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import SingleContent from './Components/SingleContent';

export const App = () => {
  console.log('im here');
  return (
    <Routes>
      <Route path='/' element={<Menu />} />
      <Route path='/content/single' element={<SingleContent />} />
      <Route path='/content' element={<div>content micro</div>} />
    </Routes>
  );
};
