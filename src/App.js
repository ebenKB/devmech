import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header/header';
import Home from './pages/app/Home';
import About from './pages/app/About';
import CartOrders from './pages/CartOrder';
import Footer from './components/Layout/footer/Footer';
import CartState from './components/Cart/CartState';
import ShowProduct from './pages/products/show';
import ProtectedRoute from './routing/protected';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ThemeState from './components/theme/themeState';
import ThemeContext from './components/theme/themeContext';

function App() {
  // const [theme] = useContext(ThemeContext);

  return (
    <ThemeState>
      <CartState>
        <Router>
          <div className={`app light`}>
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
    </ThemeState>
  );
}

export default App;
