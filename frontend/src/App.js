import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {loadResto,addVResto} from "./actions/actions";


import Homepage from './components/header/Homepage';
import Header from "./components/header/Header";
import VRestaurants from "./components/header/VisitedRestaurants";



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

  const handle = e =>{
    const dat={
      type:"All",
      page:1
    }
    dispatch(loadResto(dat));
  }
  const handleS = e =>{
    console.log(Restos)
  }
  const handleSave = e =>{
    const resto={
      id:1,
      name:"PIZOZA",
      visiteddate:"2025-12-13"
    }
    dispatch(addVResto(resto));
  }

  return (
    <div className={classes.root}> 
    <Button onClick={handle}>
      load
    </Button>
    <Button onClick={handleS}>
      show
    </Button>
    <Button onClick={handleSave}>
      Save
    </Button>
    <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/VisitedRestaurants" component={VRestaurants}/>
          </Switch>
    </Router>
    </div>
  );
}

export default App;
