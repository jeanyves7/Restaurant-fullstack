import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch,useSelector} from "react-redux";
import {setSize,setSearch} from "../../actions/actions"

const useStyles = makeStyles((theme) => ({
 
  formControl: {
    minWidth: 60,
    
    background:"white"
  },
}));


export default function TypeInput() {
  const classes = useStyles();
  const size= useSelector(state => state.Type.size);
  const [open, setOpen] =useState(false);


  const dispatch = useDispatch();


  const Types=[
      {
          value:"2",
          
      },
      {
          value:"4"
      },
      {
          value:"6"
      },
      {
          value:"8"
      }
  ]


  const handleChange = (event) => {
    const data=event.target.value
  //  console.log(data);
    dispatch(setSearch(""));
    dispatch(setSize(data));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" >size</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={size}
         onChange={handleChange}
        >
          {
              Types.map(size => (
                  <MenuItem key={size.value} value={size.value}>{size.value}</MenuItem>
              ))
          }
        </Select>
      </FormControl>
    </div>
  );
}