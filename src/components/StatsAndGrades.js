import React, { useEffect, useState } from 'react';

import { StatsAndGradesHeader } from './StatsAndGrades/StatsAndGradesHeader';
import { StatsAndGradesBody } from './StatsAndGrades/StatsAndGradesBody';

import { Row, Col, PageHeader, Layout } from 'antd';

import { css } from '@emotion/css';

import Papa from 'papaparse';
import useApi from '../hooks/useApi';

// TODO: Fix this component
export function StatsAndGrades() {
	const [ content, setContent ] = useState([]);
	// const { isLoading, data } = useApi(`https://jsonplaceholder.typicode.com/users`); // Testing out this custom hook
	const { Footer, Content } = Layout;

	// Attempting to fetch data from spreadsheet
	// Starting with 'NBA Player Grades & EPS'
	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsWOjSYH9x30FEv-z4Pom-P6cvzkphmdHOpD1eFarNJi0XmkmPb5fzCEyAMX8xs9ttaFpRsWVYTPHx/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setContent(results.data.slice(0, 100));
					} else {
						setContent(results.data);
					}
				}
			}
		);
	}, []);

	// console.log(isLoading);
	// console.log(data);

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
						<StatsAndGradesHeader />
						<StatsAndGradesBody />
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

export default StatsAndGrades;
