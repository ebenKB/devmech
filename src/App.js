import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header/header';
import Hero from './components/Layout/Hero';
import Home from './components/Layout/pages/Home';
import About from './components/Layout/pages/About';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="App light">
        <Header />
        <div className="dev-container">
          {/* <Main /> */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
