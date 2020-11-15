import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Container,
  Box,
  MenuItem,
  Menu
} from "@material-ui/core";
import {Restaurant,Home} from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";



const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
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
}

}));


const navLinks = [
  { title: `Home`, path: `/` },
  { title: `Visited`, path: `/VisitedRestaurants` },
 
];


const  Header= props => {
  
  const classes = useStyles();
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <AppBar position="relative" style={{background:"white"}}>
    <Toolbar>
    
         {isMobile ?  
         (<>
                    <IconButton 
                edge="start"
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                onClick={handleMenu}
                >
           
               <MenuIcon color="primary"/>
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
                {navLinks.map(({ title, path }) => (
               <Link to={path} key={title} className={classes.linkText}>
               <MenuItem >{title}</MenuItem>
               </Link>
               ))}
             </Menu>
             </>) 

     :<Container style={{ width: '100%' }}>
      <Box   className={classes.navbarDisplayFlex}>
        <Box >
          <IconButton edge="start" color="inherit" aria-label="Restaurants" style={{alignSelf:"flex-staart"}} >
            <Restaurant fontSize="large" color="primary" />
          </IconButton>
          </Box>
                
              {navLinks.map(({ title, path }) => (
                <Box p={1}>
           <Link to={path} key={title} className={classes.linkText}>
                <Button button>
                  <Typography color="primary" > {title} </Typography>
                </Button>
              </Link>
              </Box>
               ))}
            
          </Box>
        </Container>
              }
          
        </Toolbar>
      </AppBar>
  );
}

export default Header;