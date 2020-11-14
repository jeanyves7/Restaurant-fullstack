import React from "react";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Homepage from './components/header/Homepage';
import Header from "./components/header/Header";
import VRestaurants from "./components/header/VisitedRestaurants";
import About from "./components/header/AboutUs"
import Faq from "./components/header/Faq"
import Contact from "./components/header/Contact"


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
            <Route path="/AboutUS" exact component={About}/>
            <Route path="/Contact" exact component={Contact}/>
            <Route path="/Faq" exact component={Faq}/>
            <Route path="/VisitedRestaurants" component={VRestaurants}/>
          </Switch>
    </Router>
    </div>
  );
}

export default App;
