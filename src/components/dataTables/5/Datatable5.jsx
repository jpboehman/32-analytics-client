import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

const Datatable = ({ selectedSeason }) => {
	const [ ncaaPlayerRatings, setNCAAPlayerRatings ] = useState([]);
	const seasonUrl = mapSeasonUrl(selectedSeason);

	useEffect(() => {
		Papa.parse(
			seasonUrl,
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNCAAPlayerRatings(results.data.slice(0, 100));
					} else {
						setNCAAPlayerRatings(results.data);
					}
				}
			}
		);
	}, [seasonUrl]);

	const columns = [
		{ field: 'PLAYER', headerName: 'PLAYER', width: 200 },
		{ field: 'SCHOOL', headerName: 'SCHOOL', width: 150 },
		{ field: 'CONF', headerName: 'CONF', width: 100 },
		{ field: 'CLASS', headerName: 'CLASS', width: 100 },
		{ field: 'POS', headerName: 'POS', width: 100 },
		{ field: 'SEASON', headerName: 'SEASON', width: 100 },
		{ field: 'PLAYER GRADE', headerName: 'PLAYER GRADE', width: 100 },
		{ field: 'EPS', headerName: 'EPS', width: 100 },
		{ field: 'G', headerName: 'G', width: 100 },
		{ field: 'MP', headerName: 'MP', width: 100 },
		{ field: 'PTS', headerName: 'PTS', width: 100 },
		{ field: 'REB', headerName: 'REB', width: 100 },
		{ field: 'AST', headerName: 'AST', width: 100 },
		{ field: 'STL', headerName: 'STL', width: 100 },
		{ field: 'BLK', headerName: 'BLK', width: 100 }
	];
	return (
		<div className="datatable">
			<DataGrid
				className="datagrid"
				rows={ncaaPlayerRatings}
				columns={columns}
				getRowId={(ncaaPlayerRatings) => uuidv4(ncaaPlayerRatings)}
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
			return ncaaPlayerGradesAndEPSUrls[2022];
		case '2021-2022':
			return ncaaPlayerGradesAndEPSUrls[2021];
		case '2020-2021':
			return ncaaPlayerGradesAndEPSUrls[2020];
		case '2019-2020':
			return ncaaPlayerGradesAndEPSUrls[2019];
		case '2018-2019':
			return ncaaPlayerGradesAndEPSUrls[2018];
		case '2017-2018':
			return ncaaPlayerGradesAndEPSUrls[2017];
		default:
			return ncaaPlayerGradesAndEPSUrls[2022];
	}
};

const ncaaPlayerGradesAndEPSUrls = {
	2022: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=1828440697&single=true&output=csv',
	2021: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=0&single=true&output=csv',
	2020: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=1407375697&single=true&output=csv',
	2019: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=171155052&single=true&output=csv',
	2018: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=2134201361&single=true&output=csv',
	2017: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=423865399&single=true&output=csv'
};

export default Datatable;
