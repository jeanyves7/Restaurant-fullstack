import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch,useSelector} from "react-redux";
import {setPage} from "../../actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled() {
  
  const classes = useStyles();
  
  
  const page= useSelector(state => state.Type.page);
  const pages=useSelector(state=>state.Restaurants.totalPages);
  
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(setPage(value)) 
  };
  return (
    <div className={classes.root}>
      <Pagination count={pages} page={page} onChange={handleChange} color="secondary" showFirstButton showLastButton  />
    </div>
  );
}