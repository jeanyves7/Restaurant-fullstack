import React from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './components/RestoComponent/Homepage';
import Header from "./components/header/Header";
import VisitedRestaurants from "./components/RestoComponent/VisitedRestaurants";



// work presented by jean yves youssef


const styles = makeStyles((theme) => ({
  root:{
    minHeight:"100vh",
    background:"rgb(245,245,220)",
  }
}));

const App = () => {
  
  const classes=styles();
 
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
