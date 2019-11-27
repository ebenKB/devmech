import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header/header';
import Home from './components/Layout/pages/app/Home';
import About from './components/Layout/pages/app/About';
import CartOrders from './components/Layout/pages/CartOrder';
import Footer from './components/Layout/Footer';
import CartState from './components/Cart/CartState';
import AuthSate from './components/Auth/AuthState';
import ShowProduct from './components/Layout/pages/products/show'
import ProtectedRoute from './routing/protected';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  return (
    <AuthSate>
      <CartState>
        <Router>
          <div className="App light">
            <Header />
            <div className="dev-container">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About} />
                <ProtectedRoute exact path="/cart" component={CartOrders}/>
                <Route exact path="/cart" component={CartOrders} />
                <Route exact path="/user/register" component={Register}/>
                <Route exact path="/user/login" component={Login}/>
                <Route exact path="/product/:id" component={ShowProduct}/>
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </CartState>
    </AuthSate>
  );
}

export default App;
