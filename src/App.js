import React from 'react';
import Header from './components/Header'
import Memes from './components/Memes'

import './App.css';
import './styling/header.css'
import './styling/meme.css'
import './styling/savedmeme.css'

function App() {
  return (
    <div className="App">
    <Header />
    <Memes />
    </div>
  );
}

export default App;
