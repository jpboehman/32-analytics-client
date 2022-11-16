import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import mapSeasonUrl from '../../common/utils/expectedWins/NBAExpectedWinsMapSeason';
import SmallLoader from '../../common/Loaders/SmallLoader';

const Datatable = ({ selectedSeason }) => {
	const [ nbaExpectedWins, setNbaExpectedWins ] = useState([]);
	const seasonUrl = mapSeasonUrl(selectedSeason);
	const [ isLoading, setIsLoading ] = useState(false);
	useEffect(
		() => {
			setIsLoading(true);
			// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
			Papa.parse(seasonUrl, {
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNbaExpectedWins(results.data.slice(0, 100));
					} else {
						setNbaExpectedWins(results.data);
					}
				}
			});
			setIsLoading(false);
		},
		[ seasonUrl ]
	);

	const columns = [
		{ field: 'Team', headerName: 'TEAM', width: 200 },
		{ field: 'G', headerName: 'G', width: 100 },
		{ field: 'W', headerName: 'W', width: 100 },
		{ field: 'L', headerName: 'L', width: 100 },
		{ field: 'WIN %', headerName: 'WIN %', width: 100 },
		{ field: 'Team EPS', headerName: 'TEAM EPS', width: 100 },
		{ field: 'Opponent EPS', headerName: 'OPPONENT EPS', width: 100 },
		{ field: 'Expected Wins', headerName: 'EXPECTED WINs', width: 100 },
		{ field: 'Actual Wins', headerName: 'ACTUAL WINS', width: 100 },
		{ field: 'Expected Win %', headerName: 'EXPECTED WIN %', width: 100 },
		{ field: 'Actual Win %', headerName: 'ACTUAL WIN %', width: 100 }
	];

	return (
		<div>
			{isLoading ? (
				<SmallLoader />
			) : (
				<div className="datatable">
					<DataGrid
						className="datagrid"
						rows={nbaExpectedWins}
						columns={columns}
						getRowId={(nbaExpectedWins) => uuidv4(nbaExpectedWins)}
						pageSize={10}
						rowsPerPageOptions={[ 10 ]}
						disableSelectionOnClick
						style={{ background: '#eee', fontWeight: 600, color: 'black' }}
					/>
				</div>
			)}
		</div>
	);
};


export default Datatable;
