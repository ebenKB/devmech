import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header/header';
import Hero from './components/Layout/Hero';
import Main from './components/Layout/main';

function App() {
  return (
    <Router>
      <div className="App light">
        <Header />
        <div className="dev-container">
          <Hero />
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;
