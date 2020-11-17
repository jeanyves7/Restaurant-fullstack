import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    Paper,
    IconButton,
    Grid,
    Typography,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Home} from "@material-ui/icons";




const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
      },
    RestoContainer:{
        paddingTop:"20px",
        paddingLeft:"20px",
        paddingRight:"50px",
        justifyContent:"center",
        alignItems:"center"
    },
    root:{
        background:"gray",
      
    },
    images:{
        width:"75%",
        heigh:"75%",
        borderRadius:"50%",
        
    }
}))

const Info = ({name,type,cost,addrss,num,image,close}) =>{
   console.log("we are here");
   
    const attributes=[name,type,"cost for two: "+cost,addrss,num]
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const theme=useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down("sm"));
    
    const gap = () => {
        //constant to represent the gap between the attributes
        const spaceGap=[1,1,1];
        return (
        <Paper elevation={0}>
        {spaceGap.map(i=>(<Typography variant={"h4"} style={{background:"gray",paddingTop:"20px"}}/> ))}
        </Paper>
        );
    }


    const fill = (text) =>{
        return (
        <>
        {gap()}
        <Paper  elevation={3} >
        <Typography variant={"h4"} style={{background:"white",borderRadius:"10%"}} color="primary"> {text} </Typography>
        </Paper>
        </>
        );
    }

    

    return (
    <>
        <div className={classes.root}>
        <Grid container spacing={4} flexwrap="no-wrap"  className={classes.RestoContainer}>
            <Grid item xs={6} >
                <img className={classes.images} src={image}  alt=""/> 
            </Grid>
            <Grid item xs={12} md={6}>

                {attributes.map(atr=>(
                    fill(atr)
                ))}
            {gap()}
            <IconButton  color="primary" style={{background:"white"}} onClick={close} >
                <Home/>
                <Typography variant={"h4"}  color="primary"> Home </Typography>
                </IconButton>
            {gap()}
            </Grid>
        
        </Grid>
        </div>
        </>
    );
}

export default Info;