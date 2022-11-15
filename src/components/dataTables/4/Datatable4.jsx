import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import SmallLoader from '../../common/Loaders/SmallLoader';

const Datatable = ({ selectedSeason }) => {
  const [ncaaExpectedWins, setNcaaExpectedWins] = useState([]);
  const seasonUrl = mapSeasonUrl(selectedSeason);
  const [isLoading, setIsLoading ] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(
      seasonUrl,
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
    setIsLoading(false);
  }, [seasonUrl]);

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
    <>
    {isLoading ? <SmallLoader /> : <div className='datatable'>
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
    </div>}
    </>
  );
};

const mapSeasonUrl = (season) => {
	switch (season) {
		case '2022-2023':
			return ncaaExpectedWinsUrls[2022];
		case '2021-2022':
			return ncaaExpectedWinsUrls[2021];
		case '2020-2021':
			return ncaaExpectedWinsUrls[2020];
		case '2019-2020':
			return ncaaExpectedWinsUrls[2019];
		case '2018-2019':
			return ncaaExpectedWinsUrls[2018];
		case '2017-2018':
			return ncaaExpectedWinsUrls[2017];
		default:
			return ncaaExpectedWinsUrls[2022];
	}
};

const ncaaExpectedWinsUrls = {
	2022: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=187656278&single=true&output=csv',
	2021: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=0&single=true&output=csv',
	2020: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=347972402&single=true&output=csv',
	2019: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=1928053583&single=true&output=csv',
	2018: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=1582656730&single=true&output=csv',
	2017: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=583205997&single=true&output=csv',
};

export default Datatable;
