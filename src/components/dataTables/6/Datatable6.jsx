import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

const Datatable = () => {
	const [ ncaaTeamEpss, setNcaaTeamEpss ] = useState([]);
	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNcaaTeamEpss(results.data.slice(0, 100));
					} else {
						setNcaaTeamEpss(results.data);
					}
				}
			}
		);
	}, []);

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
	);
};

export default Datatable;
