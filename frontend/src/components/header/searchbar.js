import React,{useState} from 'react';
import {AppBar,Toolbar,Button,InputBase,Box,useTheme} from '@material-ui/core';
import {useDispatch,useSelector} from "react-redux";
import Typography from '@material-ui/core/Typography';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {loadResto,setType,setSearch,setPage,setSize} from "../../actions/actions";
import TypeInput from "./typeInput";
import SizeInput from "./sizeInput";


const useStyles = makeStyles((theme) => ({
  headers: {
    display:"flex",
      justifyContent:"space-between",
      alignContent:"center",
      alignItems:"center",
      flexDirection:`row`,
      flex:1,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
   
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  
  const searchName= useSelector(state => state.Type.search);
  const [current,setCurrent]=useState(searchName)
 
  const dispatch = useDispatch();

  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("xs"));

  const updateSearch = e =>{
    setCurrent(e.target.value)
  }


  const getSearch = e =>{
    e.preventDefault();
    const Name={name:current}
    dispatch(setSearch(current))
    dispatch(loadResto(Name));
  }

  const displaySearchInput = () =>{
    return ( 
    <Box  p={1}>
      <div className={classes.search}>
          <div className={classes.searchIcon}>
              <SearchIcon  />
            </div>
           <InputBase
            placeholder="Search…"
            value={current}
            onChange={updateSearch}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            />
      </div>
  </Box>);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Box   className={classes.headers}>
              {!isMobile? (
                displaySearchInput()
             )
               : <> </>}
              <Box  p={1}>
                  <Button style={{background:"white"}} onClick={getSearch} >
                    <Typography >SEARCH</Typography>
                  </Button>
              </Box>
              
              <Box p={1}>
              <SizeInput />
              </Box>
              <TypeInput />
            </Box>
      </Toolbar>
    </AppBar>
    {isMobile?
         <AppBar position="static" style={{background:"#778899"}}>
        <Toolbar>
            <Box   className={classes.headers}>
               {displaySearchInput()}
            </Box>
          </Toolbar>
    </AppBar>
    :<> </>
  }
    </div>
  );
}