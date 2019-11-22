import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header/header';
import Home from './components/Layout/pages/app/Home';
import About from './components/Layout/pages/app/About';
import CartOrders from './components/Layout/pages/CartOrder';
import Footer from './components/Layout/Footer';
import CartState from './components/Cart/CartState';
import ShowProduct from './components/Layout/pages/products/show'

function App() {
  return (
    <CartState>
      <Router>
        <div className="App light">
          <Header />
          <div className="dev-container">
            {/* <Main /> */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/cart" component={CartOrders} />
              <Route exact path="/product/:id" component={ShowProduct}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </CartState>
  );
}

export default App;
