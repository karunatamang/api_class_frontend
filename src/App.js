import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Teacher from './container/Teacher/Teacher.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Teacher/>
    </div>
    </BrowserRouter>
  );
}

export default App;
