import React from 'react';
import { FooterContainer } from './components/footerBlock/footerContainer/FooterContainer';
import { Header } from './components/headerBlock/header/Header';
import {MainContent} from './components/main/mainContent/MainContent'
import './App.css';

function App() {
  return <div className='App'>
    <Header />
  <MainContent />
  <FooterContainer />
  </div>;
}

export default App;
