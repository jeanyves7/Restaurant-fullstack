import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch,useSelector} from "react-redux";
import {setVisitedType} from "../../actions/actions"

const useStyles = makeStyles((theme) => ({
 
  formControl: {
    minWidth: 100,
    
    background:"white"
  },
}));

const Types=["All","Lebanese","American","Japanese","French","Italian","Mexican"]

export default function TypeInput() {
  const classes = useStyles();
 
  //getting the type from the store 
  const VisitedType= useSelector(state => state.Type.VisitedType);
  const dispatch = useDispatch();
  
  //handle drop down menu
  const [open, setOpen] =useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  //handle the change of input
  const handleChange = (event) => {
    const type=event.target.value;
    //console.log(type);
    //dispatching the data
    dispatch(setVisitedType(type));
  };

 
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" >Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={VisitedType}
         onChange={handleChange}
        >
          {
              Types.map(type => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
              ))
          }
        </Select>
      </FormControl>
    </div>
  );
}