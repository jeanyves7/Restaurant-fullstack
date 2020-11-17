import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch,useSelector} from "react-redux";
import {setType} from "../../actions/actions"

const useStyles = makeStyles((theme) => ({
 
  formControl: {
    minWidth: 100,
    
    background:"white"
  },
}));


export default function TypeInput() {
  const classes = useStyles();
  const type= useSelector(state => state.Type.types);
  const [open, setOpen] =useState(false);


  const dispatch = useDispatch();


  const Types=[
      {
          value:"All",
          
      },
      {
          value:"Lebanese"
      },
      {
          value:"Japanese"
      },
      {
          value:"Italian"
      },{
        value:"France"
      },{
          value:"American"
      }
  ]


  const handleChange = (event) => {
    const data=event.target.value
    console.log(data);
    dispatch(setType(data));
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
        <InputLabel id="demo-controlled-open-select-label" >type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
         onChange={handleChange}
        >
          {
              Types.map(type => (
                  <MenuItem value={type.value}>{type.value}</MenuItem>
              ))
          }
        </Select>
      </FormControl>
    </div>
  );
}