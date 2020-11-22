import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Box,
  MenuItem,
  Menu
} from "@material-ui/core";
import {Restaurant,RestaurantMenuTwoTone,RestaurantRounded} from "@material-ui/icons"
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {loadResto,setType,setSearch,setPage,setSize} from "../../actions/actions";
import {useDispatch} from "react-redux";

//material ui styling for the current components
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color:"white",
      [theme.breakpoints.down("xs")] :{
    flexGrow: 1
      }

  },
  navbarDisplayFlex: {
    display: `flex`,
    flexDirection:`row`,
    flex:1,
    justifyContent: "sapce-between"
  },
  navDisplayFlex: {
    display: `flex`,
    flex:1,
    justifyContent:"flex-start"
  },
linkText: {
  textDecoration: `none`,
  textTransform: `uppercase`,
},
name:{
  display: `flex`,
  flexDirection:`row`,
  flex:1,
  justifyContent: "center"
},
  text_color:{
      color:"white",
    }

}));

// Array of components that are present in the header
const navLinks = [
  { title: `Home`, path: `/` },
  { title: `Visted Restaurants`, path: `/VisitedRestaurants` }
];


const  Header= () => {
  //applying the previous styling so all components can access it
  const classes = useStyles();
  
  //anchor for the drop down menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // this theme and mediaQuery is to set the header menu responsive
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("xs"));
  const dispatch = useDispatch();


  // when we click on the home button we want it to re-render the default element
  const handleClick =() => {
    const data={
      type:"All",
      page:1,
      size:4,
    }
    //dispatching the default data 
    dispatch(setPage(1));
    dispatch(setSize(4));
    dispatch(setSearch(""));
    dispatch(setType("All"));
    dispatch(loadResto(data));

  }

  // parameter to controle the alignment of the name in mobile and normal forme 
  let NAME;
  if(isMobile){
    NAME=classes.name
  }else{
    NAME=classes.navDisplayFlex
  }

  // to handle the menu when we reach the mobile breakPoint zone
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <AppBar position="relative" style={{background:"rgb(245,245,220)"}}>
      <Toolbar>
         {isMobile ?  
         (<>
            <IconButton 
                edge="start"
                className={classes.menuButton}  
                aria-label="menu"
                onClick={handleMenu}
                >
               <RestaurantMenuTwoTone color="primary"/>
            </IconButton>
            <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                      }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                  
                        <Link to="/"  className={classes.linkText}>
                                <MenuItem  onClick={handleClick} >Home</MenuItem>
                        </Link>
                        <Link to="/VisitedRestaurants"  className={classes.linkText}>
                                <MenuItem > Visted Restaurants</MenuItem>
                        </Link>
            </Menu>
          </>) 
      :
      //this is the display of the header if its not in mobile forme
        <Box  className={classes.navbarDisplayFlex}>
            <Box >
                <IconButton edge="start" color="inherit" aria-label="Restaurants" style={{alignSelf:"flex-staart"}} >
                <Restaurant fontSize="large" color="primary" />
                </IconButton>
            </Box>
            
                <Box p={1}   >
                    <Link to="/" className={classes.linkText}>
                        <Button button onClick={handleClick}>
                            <Typography color="primary"   > Home</Typography>
                        </Button>
                    </Link>
                </Box>
                <Box p={1}   >
                    <Link to="/VisitedRestaurants" className={classes.linkText}>
                        <Button button onClick={handleClick}>
                            <Typography color="primary"   > Visted Restaurants</Typography>
                        </Button>
                    </Link>
                </Box>
        </Box>}
        <Box className={NAME}>
          <IconButton color="primary">
                <RestaurantRounded/>
                <Typography color="primary" variant="h5"> CmR  </Typography>
          </IconButton>
          
        </Box>
      </Toolbar>
  </AppBar>
  );
}

export default Header;