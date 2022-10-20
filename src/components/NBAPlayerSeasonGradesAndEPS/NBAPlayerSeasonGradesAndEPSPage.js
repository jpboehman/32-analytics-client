import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

import { Layout, Divider, Typography, Table } from 'antd';

import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import PlayerSeasonGradesDesc from '../common/static/PlayerSeasonGradesDesc';
import SiteFooter from '../common/static/SiteFooter';

// TODO: Add images to background of text content
export const NBAPlayerSeasonGradesAndEPSPage = () => {
	const [ nbaPlayerRatings, setNBAPlayerRatings ] = useState([]);
	const { Content, Footer } = Layout;
	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsWOjSYH9x30FEv-z4Pom-P6cvzkphmdHOpD1eFarNJi0XmkmPb5fzCEyAMX8xs9ttaFpRsWVYTPHx/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNBAPlayerRatings(results.data.slice(0, 100));
					} else {
						setNBAPlayerRatings(results.data);
					}
				}
			}
		);
	}, []);

	const fixedHeaderText = 'NBA Player Season Grades & EPS';
	const columns = [
		{
			title: 'PLAYER',
			dataIndex: 'PLAYER',
			key: 'PLAYER'
		},
		{
			title: 'TEAM',
			dataIndex: 'TEAM',
			key: 'TEAM'
		},
		{
			title: 'AGE',
			dataIndex: 'AGE',
			key: 'AGE'
		},
		{
			title: 'POSITION',
			dataIndex: 'POS',
			key: 'POS'
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
		}
	];

	const Background = () => {
		return (
			<div
				style={{
					backgroundImage: `url(${require('../../assets/NBA_PLAYER_GRADES_EPS.png')})`,
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
			<Typography.Title level={1} style={{ margin: 30 }}>
				{fixedHeaderText}
			</Typography.Title>
			<Divider />
			<SubscribeToday />
			<Background />
			<PlayerSeasonGradesDesc />
			<div>
				{nbaPlayerRatings.length ? <Table dataSource={nbaPlayerRatings} columns={columns} /> : <SmallLoader />}
			</div>
			<SiteFooter />
		</div>
	);
};

export default NBAPlayerSeasonGradesAndEPSPage;
