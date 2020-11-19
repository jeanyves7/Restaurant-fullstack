import React , {useEffect,useState} from 'react';
import Pagina from '../Pagination/pagination';
import {  Dialog,Box,Slide, Typography} from "@material-ui/core";
import {useDispatch,useSelector} from "react-redux";
import { makeStyles} from "@material-ui/core/styles";
import Resto from "../RestoComponent/restoPrototype";
import SearchAppBar from "../header/searchbar";
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
      justifyContent:"center",
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
      },
      content:{
        paddingTop:"300px",
        justifyItems:"center",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
      }
      
})


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const HomePage = () =>{

    const classes=useStyles();
    
    // this selector fetch for us the stored restaurants
    const Restos = useSelector(state => state.Restaurants.Restos);
    
    //This loading state is for the loaders
    const Loading=useSelector(state=>state.Restaurants.loading);
    
    //States responsable for displaying the current type and page
    const type= useSelector(state => state.Type.types);
    const page= useSelector(state => state.Type.page);
    const size= useSelector(state => state.Type.size);
    
    const dispatch = useDispatch();

    //Dialog section:
    //this state to handle the opening dialog
    const [open, setOpen] = useState(0);
    
    //seting the opening dialog to the restaurant id that we clicked on
    const handleClickOpen = par => {
      setOpen(par)
    };

    const handleClose = () => {
      setOpen(false);
    };

    const empty=(Restos.length===0)
  //we render the new data based on the current type  
  useEffect(()=>{
   getRestos();
  },[page])
  
  // we render the data based on the new type and from the first page
  useEffect(()=>{
    dispatch(setPage(1));
    getRestos();
   },[type])

   useEffect(()=>{
    dispatch(setPage(1));
    getRestos();
   },[size])
  
  //function to dispatch the restaurants based on type and current page
  const getRestos =() =>{
      const data={
        type:type,
        page:page,
        size:size
      }
      dispatch(loadResto(data))
  }


  //this condition is to show if we are fetching the data to show the loaders
  if(Loading){
    return <Loader/>
  }else{
    return (
       <>
        <SnackBar />
        <SearchAppBar />
        {!empty ?
          <> 
        <Box  spacing={5} className={classes.RestoContainer} >
          {Restos.map(resto =>(
              //maping through the list of fetched Restos
               <Box   p={1} m={1} key={resto.id}>
               <Link onClick={()=>handleClickOpen(resto.id)} to="" className={classes.linkText} >
                         <Resto  key={resto.id} name={resto.name} photo={resto.img}  />
                </Link>
                <Dialog fullScreen open={open===resto.id} onClose={handleClose} TransitionComponent={Transition} key={resto.id} >
                      <RestoInfo  key={resto.id}  name={resto.name} type={resto.type} cost={resto.costLL} addrss={resto.address} num={resto.phoneNumber} image={resto.img} close={handleClose}  />
               </Dialog>
               </Box>
          ))}
        </Box>
        <Box  display="flex" style={{textAlign:"center"}} >
          <Box   margin="auto">
        <Pagina />
        </Box>
        </Box>
        </>
        :
  <Box className={classes.content}>
    <Typography variant="h5" > No content was found :'( </Typography>
  </Box>
  }
   </>
    );
          }
}
export default HomePage;