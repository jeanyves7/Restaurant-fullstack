import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled({pages,SP}) {
  const classes = useStyles();
  
  const handleChange = (event, value) => {
    SP(value);    
  };
  return (
    <div className={classes.root}>
      <Pagination count={pages}  onChange={handleChange} color="secondary" showFirstButton showLastButton  />
    </div>
  );
}