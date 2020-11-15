import React from 'react';
import Pagina from '../pagination';
import {AppBar, Toolbar,Grid} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Resto from "../restoComponent";
const useStyles=makeStyles({
    RestoContainer:{
        paddingTop:"20px",
        paddingRight:"100px",
        
    },
    pol:{
        paddingTop:"10px",
      display:"flex",
      flex:1,
      justifyContent:"center",

    },
   
})

const HomePage = () =>{
    const pages=20;
    const classes=useStyles();
    const theme=useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down("xs"));
    
    let pad,space;
    if (isMobile){
        pad="100px";
        space=10;
    }else{
        pad="250px";
        space=3;
    }
 
    
    return (
        <>
        <AppBar position="static">
            <Toolbar />
        </AppBar>
        <Grid container spacing={space} style={{paddingLeft:`${pad}`}} className={classes.RestoContainer}>
            <Grid item xs={12}  md={6}  >
           <Resto />
            </Grid>
            <Grid item xs={12}  md={6} >
            <Resto />
            </Grid>
            <Grid item xs={12}  md={6}  >
            <Resto />
            </Grid>
            <Grid item xs={12}  md={6}  >
            <Resto />
            </Grid>
        
        </Grid>
        <div className={classes.pol}>
        <Pagina pages={pages}   />
        </div>
        
        </>
    );
}

export default HomePage;