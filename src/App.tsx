import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Grid, makeStyles } from '@material-ui/core';
import axios from 'axios'

import Home from './pages/Home/Home';
import ProductCatalog from './pages/ProductCatalog/ProductCatalog';
import Header from './components/Header/Header';
import AddNewProduct from './components/AddNewProduct/AddNewProduct';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

import Dashboard from './pages/Dashboard/Dashboard'
import DashBoardUserForm from './components/DashBoardUserForm/DashBoardUserForm';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';


import './App.css';


axios.defaults.withCredentials = true;

const useStyles = makeStyles({
  root: {
    paddingTop: 40,
  },
  main: {
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    minHeight: '70vh',
    color: 'white',
    boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.1)'
  }
});

function App() {
    const classes = useStyles();
  return (
    <div>
    <Grid container className={classes.root}>
      <Grid item xs={1} sm={2}/>
      <Grid item xs={10} sm={8}>
        <Router>
          <Header />
          <Grid container className={classes.main}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/product">
              <ProductCatalog />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route  exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/addProduct">
              <AddNewProduct />
            </Route>
            <Route path="/editProduct/:_id">
              <AddNewProduct />
            </Route>
            <Route path="/productdetails/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/dashboard/edit/:_id">
              <DashBoardUserForm />
            </Route>
            <Route exact path="/dashboard/adduser">
              <DashBoardUserForm />
            </Route>

          </Switch>
          </Grid>
        </Router>   
      </Grid>
      <Grid item xs={1} sm={2}/>
    </Grid> 
    <Footer />

    </div>
  );
}

export default App;
