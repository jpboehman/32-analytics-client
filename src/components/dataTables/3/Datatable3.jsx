import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import mapSeasonUrl from '../../common/utils/teamEPSS/NBATeamEPSSMapSeason';
import SmallLoader from '../../common/Loaders/SmallLoader';

const Datatable = ({ selectedSeason, isSubscribed }) => {
	const [ nbaTeamEPSS, setNBATeamEPSS ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const seasonUrl = mapSeasonUrl(selectedSeason);
	useEffect(
		() => {
			// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
			setIsLoading(true);
			Papa.parse(seasonUrl, {
				download: true,
				header: true,
				complete: (results) => {
					if (isSubscribed) {
						setNBATeamEPSS(results.data);
					} else {
						setNBATeamEPSS(results.data.slice(0, 5));
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
		{ field: 'Team EPS', headerName: 'TEAM EPS', width: 100 },
		{ field: 'Opponent EPS', headerName: 'OPPONENT EPS', width: 100 },
		{ field: 'EPSS', headerName: 'EPSS', width: 100 },
		{ field: 'WIN %', headerName: 'WIN %', width: 100 },
		{ field: 'Tm PTS', headerName: 'Tm PTS', width: 100 },
		{ field: 'Tm FG%', headerName: 'Tm FG%', width: 100 },
		{ field: 'Tm 3FG%', headerName: 'Tm 3FG%', width: 100 },
		{ field: 'Tm FT%', headerName: 'Tm FT%', width: 100 },
		{ field: 'Tm REB', headerName: 'Tm REB', width: 100 },
		{ field: 'Tm AST', headerName: 'Tm AST', width: 100 },
		{ field: 'Tm STL', headerName: 'Tm STL', width: 100 }
	];
	return (
		<div>
			{isLoading ? (
				<SmallLoader />
			) : (
				<div className="datatable">
					<DataGrid
						className="datagrid"
						rows={nbaTeamEPSS}
						columns={columns}
						getRowId={(nbaTeamEPSS) => uuidv4(nbaTeamEPSS)}
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
