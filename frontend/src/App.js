import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {loadResto,addVResto} from "./actions/actions";


import Homepage from './components/header/Homepage';
import Header from "./components/header/Header";
import VisitedRestaurants from "./components/header/VisitedRestaurants";



// work presented by jean yves youssef


const styles = makeStyles((theme) => ({
  root:{
    minHeight:"100vh",
    background:"rgb(245,245,220)",
  }
}));

const App = () => {

  const classes=styles();
  const Restos = useSelector(state => state.Restaurants.Restos)
  const dispatch = useDispatch();



  return (
    <div className={classes.root}> 
    <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/VisitedRestaurants"  component={VisitedRestaurants}/>
          </Switch>
    </Router>
    </div>
  );
}

export default App;
