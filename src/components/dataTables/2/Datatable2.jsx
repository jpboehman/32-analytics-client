import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

const Datatable = () => {
  const [nbaPlayerRatings, setNBAPlayerRatings] = useState([]);
  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsWOjSYH9x30FEv-z4Pom-P6cvzkphmdHOpD1eFarNJi0XmkmPb5fzCEyAMX8xs9ttaFpRsWVYTPHx/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          if (results.data.length > 100) {
            setNBAPlayerRatings(results.data.slice(0, 100));
          } else {
            setNBAPlayerRatings(results.data);
          }
        },
      }
    );
  }, []);

  const columns = [
    { field: 'PLAYER', headerName: 'PLAYER', width: 200 },
    { field: 'TEAM', headerName: 'TEAM', width: 100 },
    { field: 'AGE', headerName: 'AGE', width: 100 },
    { field: 'POS', headerName: 'POSITION', width: 100 },
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
        rows={nbaPlayerRatings}
        columns={columns}
        getRowId={(nbaPlayerRatings) => uuidv4(nbaPlayerRatings)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        style={{ background: '#eee', fontWeight: 600, color: 'black' }}
      />
    </div>
  );
};

export default Datatable;
