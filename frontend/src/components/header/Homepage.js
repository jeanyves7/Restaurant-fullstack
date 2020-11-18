import React , {useEffect,useState} from 'react';
import Pagina from '../pagination';
import {  Dialog,Box,Slide} from "@material-ui/core";
import {useDispatch,useSelector} from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Resto from "../restoComponent";
import SearchAppBar from "./searchbar";
import {Link} from "react-router-dom";
import RestoInfo from "./RestoInfo";
import {loadResto,setPage} from "../../actions/actions";
import Loader from "../loader/loaders";
import SnackBar from "../snackBar/RestosnackBars";

const useStyles=makeStyles({
    appBar: {
        position: 'relative',
      },
    RestoContainer:{
      paddingTop:"20px",
      paddingLeft:"100px",
      paddingRight:"100px",
      display:"flex",
      justifyContent:"space-evenly",
      alignItems:"center",
      flexFlow:"row wrap"    
    },
    loader:{
      paddingTop:"20px",
      paddingLeft:"100px",
      paddingRight:"100px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      flexFlow:"row wrap"
    },
    pol:{
      paddingTop:"10px",
      display:"flex",
      flex:1,
      justifyContent:"center",
    },
    linkText: {
        textDecoration: `none`,
      }
})


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const HomePage = () =>{
    // for now the pages aren't dynamically changed
  // const pages=20;

    const classes=useStyles();
    const theme=useTheme();
    
    // this selector fetch for us the stored restaurants
    const Restos = useSelector(state => state.Restaurants.Restos);
    const Loading=useSelector(state=>state.Restaurants.loading);
    
    const type= useSelector(state => state.Type.types);
    const page= useSelector(state => state.Type.page);
    
    const dispatch = useDispatch();


    

    //this state to handle the opening dialog
    const [open, setOpen] = useState(0);
    
    //seting the opening dialog to the restaurant id that we clicked on
    const handleClickOpen = par => {
      setOpen(par)
    };

  //we render the new data based on the current type  
  useEffect(()=>{
   getRestos();
  },[page])
  
  // we render the data based on the new type and from the first page
  useEffect(()=>{
    dispatch(setPage(1));
    getRestos();
   },[type])

  const handleClose = () => {
    setOpen(false);
  };
    
  const getRestos =() =>{
      const data={
        type:type,
        page:page
      }
      dispatch(loadResto(data))
  }
  if(Loading){
    return <Loader/>
  }else{

    return (
        <>
        <SnackBar />
        <SearchAppBar />
        <Box container spacing={5} className={classes.RestoContainer} >
          {Restos.map(resto =>(
               <Box item  p={1} m={1} key={resto.id}>
               <Link onClick={()=>handleClickOpen(resto.id)} to="" className={classes.linkText} >
                         <Resto name={resto.name} photo={resto.img}  />
                </Link>
                <Dialog fullScreen open={open===resto.id} onClose={handleClose} TransitionComponent={Transition}>
                      <RestoInfo  name={resto.name} type={resto.type} cost={resto.costLL} addrss={resto.address} num={resto.phoneNumber} image={resto.img} close={handleClose}  />
               </Dialog>
               </Box>
          ))}
        </Box>
        <Box container display="flex" style={{textAlign:"center"}} >
          <Box item  margin="auto">
        <Pagina   />
        </Box>
        </Box>
        </>
    );
          }

        }
export default HomePage;