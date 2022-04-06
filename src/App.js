import './App.css';

import React, { useState } from "react";
import { Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  onions: false,
  bpeppers: false,
  mushrooms: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialOrders = [];
//add variable for initial disabled


const App = () => {

  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  //add a state for disabled submit button

  //create the validation function here

  const inputChange = (name, value) => {
    //run validation function here
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      onions: formValues.onions,
      bpeppers: formValues.bpeppers,
      mushrooms: formValues.mushrooms,
      special: formValues.special,
    }

    //axios.post here


  }

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
          <PizzaForm 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              //disabled={disabled}
              errors={formErrors}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
