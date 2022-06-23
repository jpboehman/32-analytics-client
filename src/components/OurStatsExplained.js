import React, { useEffect, useState } from 'react';

import Papa from 'papaparse';

import { OurStatsExplainedHeader } from './OurStatsExplained/OurStatsExplainedHeader';
import { OurStatsExplainedBody } from './OurStatsExplained/OurStatsExplainedBody';

import { Row, Col, PageHeader, Layout, Divider, Space, Spin, Table } from 'antd';

import { css } from '@emotion/css';

import EPSBody from './OurStatsExplained/EPSBody';

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
					<PageHeader title="Our Statistics Explained" />
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
					</div>
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

export const SmallLoader = () => (
	<div
		className={css`
			justify-content: center;
			align-items: center;
		`}
	>
		<Space size="middle">
			<Spin size="large" />
		</Space>
	</div>
);

export default OurStatsExplained;
