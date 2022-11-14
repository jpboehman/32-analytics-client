import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

const Datatable = ({ selectedSeason }) => {
	const [ nbaExpectedWins, setNbaExpectedWins ] = useState([]);
	const seasonUrl = mapSeasonUrl(selectedSeason);
	useEffect(
		() => {
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
	);
};

const mapSeasonUrl = (season) => {
	switch (season) {
		case '2022-2023':
			return nbaPlayerGradesAndEPSUrls[2022];
		case '2021-2022':
			return nbaPlayerGradesAndEPSUrls[2021];
		case '2020-2021':
			return nbaPlayerGradesAndEPSUrls[2020];
		case '2019-2020':
			return nbaPlayerGradesAndEPSUrls[2019];
		case '2018-2019':
			return nbaPlayerGradesAndEPSUrls[2018];
		case '2017-2019':
			return nbaPlayerGradesAndEPSUrls[2017];
		default:
			return nbaPlayerGradesAndEPSUrls[2022];
	}
};

const nbaPlayerGradesAndEPSUrls = {
	2022: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=42602509&single=true&output=csv',
	2021: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=0&single=true&output=csv',
	2020: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=1712098413&single=true&output=csv',
	2019: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=1001954197&single=true&output=csv',
	2018: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=550998690&single=true&output=csv',
	2017: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=1575698862&single=true&output=csv',
};

export default Datatable;
