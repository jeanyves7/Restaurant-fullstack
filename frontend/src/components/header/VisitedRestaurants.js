import  React, {useEffect}  from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {loadVResto} from "../../actions/actions";
import {useDispatch,useSelector} from "react-redux";
import  moment from "moment";

const columns = [
  { field: 'name',width: 180  },
  { field: 'VisitedDate', type: 'date', width: 180 }
];

export default function VisitedRestaurants() {

  const VRestos = useSelector(state => state.Visited.Visited);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(loadVResto());
  },[])

  const UVRestos=VRestos.map(resto =>({
    id:resto.id,
    name:resto.name,
    VisitedDate:(moment(resto.visiteddate,'YYYY-MMDD').format('MMMM Do YYYY'))
  } ))

 
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid  rows={UVRestos} columns={columns} />
    </div>
  );
  
}

