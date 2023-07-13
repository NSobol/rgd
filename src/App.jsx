import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage';
import { LoadingSearchPage } from './pages/loadingSearchPage/LoadingSearchPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/loading' element={<LoadingSearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
