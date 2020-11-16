import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
 
  formControl: {
    minWidth: 100,
    marginTop:"10px",
    background:"white"
  },
}));


export default function TypeInput({SType}) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);


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
    setAge(event.target.value);
    SType(event.target.value);

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
        <InputLabel id="demo-controlled-open-select-label" >Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
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