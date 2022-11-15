import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import SmallLoader from '../../common/Loaders/SmallLoader';

const Datatable = ({ selectedSeason }) => {
	const [ ncaaTeamEpss, setNcaaTeamEpss ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const seasonUrl = mapSeasonUrl(selectedSeason);
	useEffect(
		() => {
			setIsLoading(true);
			Papa.parse(seasonUrl, {
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNcaaTeamEpss(results.data.slice(0, 100));
					} else {
						setNcaaTeamEpss(results.data);
					}
				}
			});
			setIsLoading(false);
		},
		[ seasonUrl ]
	);

	const columns = [
		{ field: 'School', headerName: 'SCHOOL', width: 200 },
		{ field: 'G', headerName: 'G', width: 100 },
		{ field: 'Team EPS', headerName: 'Team EPS', width: 100 },
		{ field: 'Opponent EPS', headerName: 'Opponent EPS', width: 100 },
		{ field: 'EPSS', headerName: 'EPSS', width: 100 },
		{ field: 'WIN %', headerName: 'WIN %', width: 100 },
		{ field: 'Tm PTS', headerName: 'Tm PTS', width: 100 },
		{ field: 'Tm FG%', headerName: 'Tm FG%', width: 100 },
		{ field: 'Tm 3FG%', headerName: 'Tm 3FG%', width: 100 },
		{ field: 'Tm FT%', headerName: 'Tm FT%', width: 100 },
		{ field: 'Tm REB', headerName: 'Tm REB', width: 100 },
		{ field: 'Tm AST', headerName: 'Tm AST', width: 100 },
		{ field: 'Tm STL', headerName: 'Tm STL', width: 100 },
		{ field: 'Tm BLK', headerName: 'Tm BLK', width: 100 },
		{ field: 'Tm TOV', headerName: 'Tm TOV', width: 100 }
	];
	return (
		<div>
			{isLoading ? (
				<SmallLoader />
			) : (
				<div className="datatable">
					<DataGrid
						className="datagrid"
						rows={ncaaTeamEpss}
						columns={columns}
						getRowId={(ncaaTeamEpss) => uuidv4(ncaaTeamEpss)}
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
			return ncaaTeamEPSSUrls[2022];
		case '2021-2022':
			return ncaaTeamEPSSUrls[2021];
		case '2020-2021':
			return ncaaTeamEPSSUrls[2020];
		case '2019-2020':
			return ncaaTeamEPSSUrls[2019];
		case '2018-2019':
			return ncaaTeamEPSSUrls[2018];
		case '2017-2018':
			return ncaaTeamEPSSUrls[2017];
		default:
			return ncaaTeamEPSSUrls[2022];
	}
};

const ncaaTeamEPSSUrls = {
	2022: 'https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=1713561817&single=true&output=csv',
	2021: 'https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=0&single=true&output=csv',
	2020: 'https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=827193655&single=true&output=csv',
	2019: 'https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=1908155642&single=true&output=csv',
	2018: 'https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=2022840876&single=true&output=csv',
	2017: 'https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=334024478&single=true&output=csv'
};

export default Datatable;
