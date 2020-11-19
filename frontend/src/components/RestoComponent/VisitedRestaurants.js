import  React, {useEffect}  from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {loadVResto} from "../../actions/actions";
import {useDispatch,useSelector} from "react-redux";
import  moment from "moment";
import SnackBar from "../snackBar/VisitedSnackBar";
import Loader from "../loader/loaders";

const columns = [
  { field: 'name',width: 180,
  
    },
  { field: 'VisitedDate', type: 'date', width: 180,
  }
];

export default function VisitedRestaurants() {

  const VRestos = useSelector(state => state.Visited.Visited);
  const loading = useSelector(state => state.Visited.loading);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(loadVResto());
  },[])

  const UVRestos=VRestos.map(resto =>({
    id:resto.id,
    name:resto.name,
    VisitedDate:(moment(resto.visiteddate,'YYYY-MMDD').format('MMMM Do YYYY'))
  } ))

 if(loading){
   return (
    <Loader />
   );
 }else{
  return (
    <div style={{ height: 600, width: '100%' }}>
      <SnackBar />
      <DataGrid  rows={UVRestos} columns={columns} />
    </div>
  );
 }
}

