import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

const Datatable = () => {
  const [ncaaExpectedWins, setNcaaExpectedWins] = useState([]);
  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          if (results.data.length > 100) {
            setNcaaExpectedWins(results.data.slice(0, 100));
          } else {
            setNcaaExpectedWins(results.data);
          }
        },
      }
    );
  }, []);

  const columns = [
    { field: 'School', headerName: 'SCHOOL', width: 200 },
    { field: 'G', headerName: 'G', width: 100 },
    { field: 'W', headerName: 'W', width: 100 },
    { field: 'L', headerName: 'L', width: 100 },
    { field: 'WIN %', headerName: 'WIN %', width: 100 },
    { field: 'Team EPS', headerName: 'TEAM EPS', width: 100 },
    { field: 'Opponent EPS', headerName: 'OPPONENT EPS', width: 100 },
    { field: 'Expected Wins', headerName: 'EXPECTED WINs', width: 100 },
    { field: 'Actual Wins', headerName: 'ACTUAL WINS', width: 100 },
    { field: 'Expected Win %', headerName: 'EXPECTED WIN %', width: 100 },
    { field: 'Actual Win %', headerName: 'ACTUAL WIN %', width: 100 },
  ];
  return (
    <div className='datatable'>
      <DataGrid
        className='datagrid'
        rows={ncaaExpectedWins}
        columns={columns}
        getRowId={(ncaaExpectedWins) => uuidv4(ncaaExpectedWins)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        style={{ background: '#eee', fontWeight: 600, color: 'black' }}
      />
    </div>
  );
};

export default Datatable;
