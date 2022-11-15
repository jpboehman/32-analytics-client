import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import SmallLoader from '../../common/Loaders/SmallLoader';

const Datatable = ({ selectedSeason }) => {
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
					if (results.data.length > 100) {
						setNBATeamEPSS(results.data.slice(0, 100));
					} else {
						setNBATeamEPSS(results.data);
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
		{ field: 'Tm Reb', headerName: 'Tm Reb', width: 100 },
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

const mapSeasonUrl = (season) => {
	switch (season) {
		case '2022-2023':
			return nbaTeamEPSSSharedUrls[2022];
		case '2021-2022':
			return nbaTeamEPSSSharedUrls[2021];
		case '2020-2021':
			return nbaTeamEPSSSharedUrls[2020];
		case '2019-2020':
			return nbaTeamEPSSSharedUrls[2019];
		case '2018-2019':
			return nbaTeamEPSSSharedUrls[2018];
		case '2017-2018':
			return nbaTeamEPSSSharedUrls[2017];
		default:
			return nbaTeamEPSSSharedUrls[2022];
	}
};

const nbaTeamEPSSSharedUrls = {
	2022: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=1150726815&single=true&output=csv',
	2021: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=0&single=true&output=csv',
	2020: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=1517582386&single=true&output=csv',
	2019: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=287366984&single=true&output=csv',
	2018: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=1278594779&single=true&output=csv',
	2017: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=561492024&single=true&output=csv'
};

export default Datatable;
