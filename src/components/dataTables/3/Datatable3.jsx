import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

const Datatable = () => {
  const [nbaTeamEPSS, setNBATeamEPSS] = useState([]);
  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          if (results.data.length > 100) {
            setNBATeamEPSS(results.data.slice(0, 100));
          } else {
            setNBATeamEPSS(results.data);
          }
        },
      }
    );
  }, []);

  const columns = [
    { field: 'Team', headerName: 'TEAM', width: 200 },
    { field: 'G', headerName: 'G', width: 100 },
    { field: 'Team EPS', headerName: 'TEAM EPS', width: 100 },
    { field: 'Opponent EPS', headerName: 'OPPONENT EPS', width: 100 },
    { field: 'EPSS', headerName: 'EPSS', width: 100 },
    { field: 'WIN %', headerName: 'WIN %', width: 100 },
    { field: 'Tm PTS', headerName: 'Tm PTS', width: 100 },
    { field: 'Tm FG%', headerName: 'Tm FG%', width: 100 },
    { field: 'Tm 3FG%', headerName: 'Tm 3FG%', width: 100 },
    { field: 'Tm FT%', headerName: 'Tm FT%', width: 100 },
    { field: 'Tm Reb', headerName: 'Tm Reb', width: 100 },
    { field: 'Tm AST', headerName: 'Tm AST', width: 100 },
    { field: 'Tm STL', headerName: 'Tm STL', width: 100 },
  ];
  return (
    <div className='datatable'>
      <DataGrid
        className='datagrid'
        rows={nbaTeamEPSS}
        columns={columns}
        getRowId={(nbaTeamEPSS) => uuidv4(nbaTeamEPSS)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        style={{ background: '#eee', fontWeight: 600, color: 'black' }}
      />
    </div>
  );
};

export default Datatable;
