import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackBar({type,open,setClose}) {
  const classes = useStyles();
 

  let message;
  if(type==="error"){
    message="You already Visited this Restaurant today!";
  }else{
    message="We hope you liked, See you Soon!"
  }
    
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setClose(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
           {message}
        </Alert>
      </Snackbar>
    </div>
  );
}