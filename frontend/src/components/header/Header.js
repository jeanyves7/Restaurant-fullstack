import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import {Restaurant} from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
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
    flex:1,
    justifyContent: "flex-start"
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
  { title: `about us`, path: `/AboutUs` },
  { title: `Home`, path: `/` },
  { title: `Visited`, path: `/VisitedRestaurants` },
  { title: `contact`, path: `/Contact` },
  { title: `faq`, path: `/Faq` }
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

     : <Container  className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Restaurant fontSize="large" color="primary" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
              {navLinks.map(({ title, path }) => (
           <Link to={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
               ))}
          </List>
        </Container>
              }
          
        </Toolbar>
      </AppBar>
  );
}

export default Header;