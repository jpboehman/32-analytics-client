import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

import { Layout, Divider, Typography, Table } from 'antd';

import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import PlayerSeasonGradesDesc from '../common/static/PlayerSeasonGradesDesc';

// TODO: Add images to background of text content
export const NCAAPlayerSeasonGradesAndEPSPage = () => {
	const [ ncaaPlayerRatings, setNCAAPlayerRatings ] = useState([]);
	const { Content, Footer } = Layout;
	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?output=csv',
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
	}, []);

	const fixedHeaderText = 'NCAA Player Season Grades & EPS';
	const columns = [
		{
			title: 'PLAYER',
			dataIndex: 'PLAYER',
			key: 'PLAYER'
		},
		{
			title: 'SCHOOL',
			dataIndex: 'SCHOOL',
			key: 'SCHOOL'
		},
		{
			title: 'CONF',
			dataIndex: 'CONF',
			key: 'CONF'
		},
		{
			title: 'CLASS',
			dataIndex: 'CLASS',
			key: 'CLASS'
		},
		{
			title: 'POS',
			dataIndex: 'POS',
			key: 'POS'
		},
		{
			title: 'SEASON',
			dataIndex: 'SEASON',
			key: 'SEASON'
		},
		{
			title: 'PLAYER GRADE',
			dataIndex: 'PLAYER GRADE',
			key: 'PLAYER GRADE'
		},
		{
			title: 'EPS',
			dataIndex: 'EPS',
			key: 'EPS'
		},
		{
			title: 'G',
			dataIndex: 'G',
			key: 'G'
		},
		{
			title: 'MP',
			dataIndex: 'MP',
			key: 'MP'
		},
		{
			title: 'PTS',
			dataIndex: 'PTS',
			key: 'PTS'
		},
		{
			title: 'REB',
			dataIndex: 'REB',
			key: 'REB'
		},
		{
			title: 'AST',
			dataIndex: 'AST',
			key: 'AST'
		},
		{
			title: 'STL',
			dataIndex: 'STL',
			key: 'STL'
		},
		{
			title: 'BLK',
			dataIndex: 'BLK',
			key: 'BLK'
		},
		{
			title: 'BLK',
			dataIndex: 'BLK',
			key: 'BLK'
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
			<div>
				{ncaaPlayerRatings.length ? (
					<Table dataSource={ncaaPlayerRatings} columns={columns} />
				) : (
					<SmallLoader />
				)}
			</div>
		</div>
	);
};

export default NCAAPlayerSeasonGradesAndEPSPage;
