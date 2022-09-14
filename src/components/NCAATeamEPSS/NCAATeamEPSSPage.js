import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

import { Layout, Divider, Typography, Table } from 'antd';

import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import PlayerSeasonGradesDesc from '../common/static/PlayerSeasonGradesDesc';

// TODO: Add images to background of text content
export const NCAATeamEPSSPage = () => {
	const [ ncaaTeamEpss, setNcaaTeamEpss ] = useState([]);
	const { Content, Footer } = Layout;
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

	const fixedHeaderText = 'NCAA Player Season Grades & EPS';
	const columns = [
		{
			title: 'School',
			dataIndex: 'School',
			key: 'School'
		},
		{
			title: 'G',
			dataIndex: 'G',
			key: 'G'
		},
		{
			title: 'Team EPS',
			dataIndex: 'Team EPS',
			key: 'Team EPS'
		},
		{
			title: 'Opponent EPS',
			dataIndex: 'Opponent EPS',
			key: 'EPSS'
		},
		{
			title: 'EPSS',
			dataIndex: 'EPSS',
			key: 'EPSS'
		},
		{
			title: 'WIN %',
			dataIndex: 'WIN %',
			key: 'WIN %'
		},
		{
			title: 'Tm PTS',
			dataIndex: 'Tm PTS',
			key: 'Tm PTS'
		},
		{
			title: 'Tm FG%',
			dataIndex: 'Tm FG%',
			key: 'Tm FG%'
		},
		{
			title: 'Tm 3FG%',
			dataIndex: 'Tm 3FG%',
			key: 'Tm 3FG%'
		},
		{
			title: 'Tm FT%',
			dataIndex: 'Tm FT%',
			key: 'Tm FT%'
		},

		{
			title: 'Tm REB',
			dataIndex: 'Tm REB',
			key: 'Tm REB'
		},
		{
			title: 'Tm AST',
			dataIndex: 'Tm AST',
			key: 'Tm AST'
		},
		{
			title: 'Tm STL',
			dataIndex: 'Tm STL',
			key: 'Tm STL'
		},
		{
			title: 'Tm BLK',
			dataIndex: 'Tm BLK',
			key: 'Tm BLK'
		},
		{
			title: 'Tm TOV',
			dataIndex: 'Tm TOV',
			key: 'Tm TOV'
		}
	];

	return (
		<div
			className={css`
				margin-left: 250px;
				margin-right: 200px;
			`}
		>
			<Typography.Title level={1} style={{ margin: 30 }}>
				{fixedHeaderText}
			</Typography.Title>
			<Divider />
			<SubscribeToday />
			<Divider />
			<PlayerSeasonGradesDesc leagueType="NCAA" />
			<div>{ncaaTeamEpss.length ? <Table dataSource={ncaaTeamEpss} columns={columns} /> : <SmallLoader />}</div>
		</div>
	);
};

export default NCAATeamEPSSPage;
