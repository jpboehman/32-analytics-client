import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

import { Layout, Divider, Typography, Table } from 'antd';

import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SiteFooter from '../common/static/SiteFooter';
import SubscribeToday from '../common/static/SubscribeToday';

// TODO: Add images to background of text content
export const NBATeamEPSSPage = () => {
	const [ nbaTeamEPSS, setNBATeamEPSS ] = useState([]);
	const { Content, Footer } = Layout;
	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNBATeamEPSS(results.data.slice(0, 100));
					} else {
						setNBATeamEPSS(results.data);
					}
				}
			}
		);
	}, []);

	const fixedHeaderText = 'NBA Team EPSS';
	const columns = [
		{
			title: 'Team',
			dataIndex: 'Team',
			key: 'T'
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
			key: 'Opponent EPS'
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
			title: 'Tm Reb',
			dataIndex: 'Tm Reb',
			key: 'Tm Reb'
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
		}
	];

	const Background = () => {
		return (
			<div
				style={{
					backgroundImage: `url(${require('../../assets/NBA_EPS.png')})`,
					height: '30vh',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}
			>
				<Typography.Title level={1} style={{ color: 'white', marginLeft: 20 }}>
					{fixedHeaderText}
				</Typography.Title>
				<Typography.Title style={{ color: 'white', marginLeft: 20 }} level={5}>
					--------------------------------------------------------
				</Typography.Title>
				<Typography.Title level={4} style={{ color: 'white', marginLeft: 20, maxWidth: 750 }}>
					Efficient Production Score Spread (EPSS) is the difference or spread between a team’s Efficient
					Production Score (EPS) and their opponent’s EPS. The EPSS stat is our way to measure team
					performance. Historically, a team’s EPSS and win percentage are strongly correlated.
				</Typography.Title>
				<Typography.Title level={4} style={{ color: 'white', marginLeft: 20, maxWidth: 750 }}>
					EPSS = (Team EPS – Opponent EPS)
				</Typography.Title>
			</div>
		);
	};

	return (
		<div
			className={css`
				margin-left: 250px;
				margin-right: 200px;
			`}
		>
			<SubscribeToday />
			<Background />
			<Divider />
			<div>{nbaTeamEPSS.length ? <Table dataSource={nbaTeamEPSS} columns={columns} /> : <SmallLoader />}</div>
			<SiteFooter />
		</div>
	);
};

export default NBATeamEPSSPage;
