import './App.css';

import React, { useState, useEffect } from "react";
import { Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

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
const initialDisabled = true;


const App = () => {

  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("name is required")
      .min(2, "name must be at least 2 characters"),
    size: yup
      .string()
      .required("size is required")
      .oneOf(["small", "medium", "large"], "pick a size"),
    pepperoni: yup.boolean(),
    onions: yup.boolean(),
    bpeppers: yup.boolean(),
    mushrooms: yup.boolean(),
    special: yup.string()
  })

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: ''}))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
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

    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        setOrders([ ...orders, newOrder ]);
        console.log([ ...orders, newOrder ]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }


  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


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
              disabled={disabled}
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
