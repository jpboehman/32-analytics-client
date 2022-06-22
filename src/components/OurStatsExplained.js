import React, { useEffect, useState } from 'react';

import Papa from 'papaparse';

import { OurStatsExplainedHeader } from './OurStatsExplained/OurStatsExplainedHeader';
import { OurStatsExplainedBody } from './OurStatsExplained/OurStatsExplainedBody';

import { Row, Col, PageHeader, Layout, Divider } from 'antd';

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


	console.log(topEPSData[0]);

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

export default OurStatsExplained;
