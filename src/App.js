import React from 'react';
import TypingContainer from './Components/typingContainer';
import QwertyContainer from './Components/Keyboard/qwertyContainer';
import './App.css';

/*
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import Nav from './components/nav';
*/

function App() {
  return (
    <div className="App">
      <div className='title'>FST CDR</div> 
      {/* <Nav /> */}
      {/* <TypingContainer /> */}
      <QwertyContainer />
    </div>
  );
}

export default App;
