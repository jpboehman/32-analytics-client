import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

const Datatable = () => {
  const [ncaaPlayerRatings, setNCAAPlayerRatings] = useState([]);
  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          if (results.data.length > 100) {
            setNCAAPlayerRatings(results.data.slice(0, 100));
          } else {
            setNCAAPlayerRatings(results.data);
          }
        },
      }
    );
  }, []);

  const columns = [
    { field: 'PLAYER', headerName: 'PLAYER', width: 200 },
    { field: 'SCHOOL', headerName: 'SCHOOL', width: 150 },
    { field: 'CONF', headerName: 'CONF', width: 100 },
    { field: 'CLASS', headerName: 'CLASS', width: 100 },
    { field: 'POS', headerName: 'POS', width: 100 },
    { field: 'SEASON', headerName: 'SEASON', width: 100 },
    { field: 'PLAYER GRADE', headerName: 'PLAYER GRADE', width: 100 },
    { field: 'EPS', headerName: 'EPS', width: 100 },
    { field: 'G', headerName: 'G', width: 100 },
    { field: 'MP', headerName: 'MP', width: 100 },
    { field: 'PTS', headerName: 'PTS', width: 100 },
    { field: 'REB', headerName: 'REB', width: 100 },
    { field: 'AST', headerName: 'AST', width: 100 },
    { field: 'STL', headerName: 'STL', width: 100 },
    { field: 'BLK', headerName: 'BLK', width: 100 },
  ];
  return (
    <div className='datatable'>
      <DataGrid
        className='datagrid'
        rows={ncaaPlayerRatings}
        columns={columns}
        getRowId={(ncaaPlayerRatings) => uuidv4(ncaaPlayerRatings)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        style={{ background: '#eee', fontWeight: 600, color: 'black' }}
      />
    </div>
  );
};

export default Datatable;
