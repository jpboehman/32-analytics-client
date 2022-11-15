import './datatable.css';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import SmallLoader from '../../common/Loaders/SmallLoader';

const Datatable = ({ selectedSeason }) => {
	const [ nbaPlayerRatings, setNBAPlayerRatings ] = useState([]);
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
						setNBAPlayerRatings(results.data.slice(0, 100));
					} else {
						setNBAPlayerRatings(results.data);
					}
				}
			});
			setIsLoading(false);
		},
		[ seasonUrl ]
	);

	const columns = [
		{ field: 'PLAYER', headerName: 'PLAYER', width: 200 },
		{ field: 'TEAM', headerName: 'TEAM', width: 100 },
		{ field: 'AGE', headerName: 'AGE', width: 100 },
		{ field: 'POS', headerName: 'POSITION', width: 100 },
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
		<div>
			{isLoading ? (
				<SmallLoader />
			) : (
				<div className="datatable">
					<DataGrid
						className="datagrid"
						rows={nbaPlayerRatings}
						columns={columns}
						getRowId={(nbaPlayerRatings) => uuidv4(nbaPlayerRatings)}
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
	2022: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=476428864&single=true&output=csv',
	2021: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=0&single=true&output=csv',
	2020: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=1045970703&single=true&output=csv',
	2019: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=159003523&single=true&output=csv',
	2018: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=1360989010&single=true&output=csv',
	2017: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=484221943&single=true&output=csv'
};

export default Datatable;
