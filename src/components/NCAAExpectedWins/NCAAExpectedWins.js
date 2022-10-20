import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

import { Card, Layout, Divider, Typography, Table } from 'antd';

import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import SiteFooter from '../common/static/SiteFooter';

const { Title } = Typography;

// TODO: Add images to background of text content
export const NCAAExpectedWinsPage = () => {
	const [ ncaaExpectedWins, setNcaaExpectedWins ] = useState([]);
	const { Content, Footer } = Layout;
	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNcaaExpectedWins(results.data.slice(0, 100));
					} else {
						setNcaaExpectedWins(results.data);
					}
				}
			}
		);
	}, []);

	const fixedHeaderText = 'NCAA Expected Wins';
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
			title: 'W',
			dataIndex: 'W',
			key: 'W'
		},
		{
			title: 'L',
			dataIndex: 'L',
			key: 'L'
		},
		{
			title: 'WIN %',
			dataIndex: 'WIN %',
			key: 'WIN %'
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
			title: 'Expected Wins',
			dataIndex: 'Expected Wins',
			key: 'Expected Wins'
		},
		{
			title: 'Actual Wins',
			dataIndex: 'Actual Wins',
			key: 'Actual Wins'
		},
		{
			title: 'Expected Win %',
			dataIndex: 'Expected Win %',
			key: 'Expected Win %'
		},
		{
			title: 'Actual Win %',
			dataIndex: 'Actual Win %',
			key: 'Actual Win %'
		}
	];

	const Background = () => {
		return (
			<div
				style={{
					backgroundImage: `url(${require('../../assets/NCAA_EXPECTED_WINS.png')})`,
					height: '40vh',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover'
				}}
			>
				<Typography.Title level={1} style={{ marginLeft: 20, marginTop: 10, marginBotttom: 5, color: 'white' }}>
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
			<Background />
			<SubscribeToday />
			<Divider />
			<NCAAExpectedWinsDesc leagueType="NCAA" />
			<div>
				{ncaaExpectedWins.length ? <Table dataSource={ncaaExpectedWins} columns={columns} /> : <SmallLoader />}
			</div>
			<SiteFooter />
		</div>
	);
};

const NCAAExpectedWinsDesc = ({ leagueType }) => (
	<div
		className={css`
			justify-content: center;
			align-items: center;
		`}
	>
		{/* TODO: Add button that takes user to subscription */}
		<Card
			title={leagueType === 'NCAA' ? 'What are NCAA Expected Wins?' : 'What are NBA Expected Wins?'}
			bordered
			style={{ width: 1000, margin: 30 }}
		>
			<Title level={4}>
				Through the use of our EPS statistic, we are able to project a NCAA Men’s Basketball team’s win
				percentage which then allows us to project how many wins a team is expected to have. These projections
				are a unique way to understand whether a team has played better or worse than their record indicates.
			</Title>
		</Card>
	</div>
);

export default NCAAExpectedWinsPage;
