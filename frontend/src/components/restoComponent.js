import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from "@material-ui/core/Typography";




const styles = (muiBaseTheme) => ({
  root:{
    display: "grid",
    gridTemplateRows: "1fr auto",
    gridGap: "8px",
    width:"40vh",
    height:"40vh",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    boxShadow: "0 8px 40px -40px rgba(255,215,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
     
    },
  },
  content: {
    alignSelf: "end",
    textAlign: "center",
    background:"gray",
    color:"white",
    opacity:"0.9",
    
    
  },
  icon: {
  color:"orange",
 

  }
});

function App({ classes }) {

  const handle = e =>{
    console.log(Image);
  }
  return (
      <>
    <Paper className={classes.root} style={{ backgroundImage: "url(/Gallery/chaudfroid.jpg)"}} >
          <Typography
            className={classes.content}
            variant={"h7"}
            gutterBottom
          >
             Chaud froid 
            <IconButton className={classes.icon} onClick={handle} >
            <CheckCircleIcon />
          </IconButton>
          </Typography>  
      </Paper>
      </>
    
  );
}

export default withStyles(styles)(App);
