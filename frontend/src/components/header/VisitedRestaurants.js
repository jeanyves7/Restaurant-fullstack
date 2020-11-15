import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
  { field: 'name',width: 180  },
  { field: 'VisitedDate', type: 'date', width: 180 }
];

const rows = [
  {
    id: 1,
    name: 'Chaud Froid',
    VisitedDate:"2012-03-12",
  },
  {
    id: 2,
    name: 'Deek Duke',
    VisitedDate:"2012-04-14",
  },
  {
    id: 3,
    name: 'Pizza Nini',
    VisitedDate:"2001-01-01",
  },
  {
    id: 4,
    name: 'La Burgeria',
    VisitedDate:"2019-05-19",
  },
  {
    id: 5,
    name: 'Malek el tawouk',
    VisitedDate:"2009-06-07",
  },
  {
    id: 6,
    name: 'Chaud Froid',
    VisitedDate:"2005-12-4",
  },
];



export default function VisitedRestaurants() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid  rows={rows} columns={columns} />
    </div>
  );
}

