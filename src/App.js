import './App.css';

import React from "react";
import { Route, Link, Switch} from 'react-router-dom';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

const App = () => {
  return (
    <div className='container'>
      <nav>
        <h2>Lambda Eats</h2>
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza">Order</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
