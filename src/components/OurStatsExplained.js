import React, { useEffect, useState } from 'react';

import Papa from 'papaparse';

import { OurStatsExplainedHeader } from './OurStatsExplained/OurStatsExplainedHeader';
import { OurStatsExplainedBody } from './OurStatsExplained/OurStatsExplainedBody';
import { SmallLoader } from './common/Loaders/SmallLoader';

import { Row, Col, PageHeader, Layout, Divider, Space, Spin, Table } from 'antd';

import { css } from '@emotion/css';

import EPSBody from './OurStatsExplained/EPSBody';
import SiteFooter from './common/static/SiteFooter';

export function OurStatsExplained() {
	const [ topEPSData, setTopEPSData ] = useState({});
	const { Footer, Content } = Layout;

	// Attempting to fetch data from spreadsheet
	// Starting with 'NBA Player Grades & EPS'
	useEffect(() => {
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsWOjSYH9x30FEv-z4Pom-P6cvzkphmdHOpD1eFarNJi0XmkmPb5fzCEyAMX8xs9ttaFpRsWVYTPHx/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					setTopEPSData(results.data);
				}
			}
		);
	}, []);

	console.log(topEPSData);

	let topEpsDataTop10 = [];
	if (topEPSData[0]) {
		for (let i = 0; i < 10; i++) {
			topEpsDataTop10.push(topEPSData[i]);
		}
	}

	console.log(topEpsDataTop10);

	const data = topEpsDataTop10.length ? topEpsDataTop10 : undefined;

	const columns = [
		{
			title: 'PLAYER',
			dataIndex: 'PLAYER',
			key: 'PLAYER'
		},
		{
			title: 'AGE',
			dataIndex: 'AGE',
			key: 'AGE'
		},
		{
			title: 'AST',
			dataIndex: 'AST',
			key: 'AST'
		},
		{
			title: 'BLK',
			dataIndex: 'BLK',
			key: 'BLK'
		},
		{
			title: 'EPS',
			dataIndex: 'EPS',
			key: 'EPS'
		},
		{
			title: 'FG%',
			dataIndex: 'FG%',
			key: 'FG%'
		},
		{
			title: 'FT%',
			dataIndex: 'FT%',
			key: 'FT%'
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
			title: '3FG%',
			dataIndex: '3FG%',
			key: '3FG%'
		},
		{
			title: 'PLAYER GRADE',
			dataIndex: 'PLAYER GRADE',
			key: 'PLAYER GRADE'
		},
		{
			title: 'POS',
			dataIndex: 'POS',
			key: 'POS'
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
			title: 'STL',
			dataIndex: 'STL',
			key: 'STL'
		},
		{
			title: 'TEAM',
			dataIndex: 'TEAM',
			key: 'TEAM'
		},
		{
			title: 'TOV',
			dataIndex: 'TOV',
			key: 'TOV'
		}
	];

	console.log(data);

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content style={{ padding: '0 25px' }}>
					<div
						className={css`
							min-height: 80vh;
							min-width: 50vh;
							background: #fff;
						`}
					>
						<OurStatsExplainedHeader />
						<OurStatsExplainedBody />
						<Divider />
						<EPSBody />
						{data ? (
							<Table columns={columns} dataSource={data} className={css`margin: 50px;`} />
						) : (
							<SmallLoader />
						)}
						<RecentMVPsSeasonGradeRank />
					</div>
					<SiteFooter />
				</Content>
				<Footer style={{ textAlign: 'center' }}>ThirtyTwo Analytics ©2020</Footer>
			</Layout>
			<Row>
				<Col span={1500} />
			</Row>
			<Row />
			<Row />
			<Row />
		</div>
	);
}

const recentMVPs2022Current = [
	{ year: 2022, playerName: 'Nikola Jokic', seasonRank: '97.42', rankPosition: '1st' },
	{ year: 2021, playerName: 'Nikola Jokic', seasonRank: '97.42', rankPosition: '1st' },
	{ year: 2020, playerName: 'Giannis Antetokounmpo', seasonRank: '94.05', rankPosition: '1st' },
	{ year: 2019, playerName: 'Giannis Antetokounmpo', seasonRank: '95.56', rankPosition: '2nd' },
	{ year: 2020, playerName: 'James Harden', seasonRank: '94.33', rankPosition: '1st' },
	{ year: 2020, playerName: 'Russell Westbrook', seasonRank: '97.87', rankPosition: '1st' },
	{ year: 2020, playerName: 'Stephen Curry', seasonRank: '96.89', rankPosition: '1st' },
	{ year: 2020, playerName: 'Stephen Curry', seasonRank: '92.11', rankPosition: '4th' },
	{ year: 2020, playerName: 'Kevin Durant', seasonRank: '97.10', rankPosition: '1st' },
	{ year: 2020, playerName: 'LeBron James', seasonRank: '96.74', rankPosition: '1st' }
];

export const RecentMVPsSeasonGradeRank = () => {
	const columns = [
		{
			title: 'YEAR',
			dataIndex: 'year',
			key: 'year',
			sorter: (a, b) => a.year - b.year,
			sortDirections: [ 'ascend', 'descend' ],
			width: '10%'
		},
		{
			title: 'NBA MVP',
			dataIndex: 'playerName',
			key: 'playerName',
			sorter: (a, b) => a.playerName.localeCompare(b.playerName),
			sortDirections: [ 'ascend', 'descend' ],
			width: '15%'
		},
		{
			title: 'Player Season Grade Rank',
			dataIndex: 'seasonRank',
			key: 'seasonRank',
			render: (seasonRank) => {
				return (
					<div
						className={css`
							white-space: nowrap !important;
							text-overflow: ellipsis !important;
							overflow-x: hidden !important;
							overflow-y: hidden !important;
						`}
						style={{ maxWidth: 50 }}
					>
						{seasonRank}
					</div>
				);
			},
			sorter: (a, b) => a.seasonRank > b.seasonRank,
			sortDirections: [ 'ascend', 'descend' ],
			width: '10%'
		},
		{
			title: 'Rank',
			dataIndex: 'rankPosition',
			key: 'rankPosition',
			width: '10%'
		}
	];

	return <Table columns={columns} dataSource={recentMVPs2022Current} className={css`margin: 50px;`} size="middle" />;
};

export default OurStatsExplained;
