import './App.css';
import { FooterContainer } from './components/footerBlock/footerContainer/FooterContainer';
import { Header } from './components/headerBlock/header/Header';
import {MainContent} from './components/main/mainContent/MainContent'

function App() {
  return <div className='App'>
    <Header />
  <MainContent />
  <FooterContainer />
  </div>;
}

export default App;
