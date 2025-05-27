import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  return (
    <div className="app">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} />
    </div>
  );
}

export default App;