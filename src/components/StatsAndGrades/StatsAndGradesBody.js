/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Card, Col, List, Typography, Divider, Row } from 'antd';

import { css } from '@emotion/css';

import { AreaChartOutlined, BarChartOutlined, FormOutlined, RiseOutlined } from '@ant-design/icons';

// TODO: Add images to background of text content
export const StatsAndGradesBody = () => {
	const navigate = useNavigate();
	const statsAndGradesBodyTitle = 'Read each bullet below to learn more about our statistic offerings';
	const statsAndGradesBodySection = 'What are Player Season Grades?';

	// Card summaries
	const playerSeasonGradeDescription = `The Player Season Grade statistic grades a player's season on
	a scale of 0-100 through the use of traditional and advanced statistics.`;
	const efficientProductionScoreDescription = `Efficient Production Score attempts to measure a player’s
	performance by applying linear weights to traditional box score statistics.`;
	const efficientProductionScoreSpreadDescription = `EPSS is used to measure team performance by finding the
	difference/spread between a team’s EPS and their opponent’s EPS.`;
	const expectedWinsDescription = `Expected Wins offers an expected win total through games played and expected win
	percentage for each team based on our EPS statistic.`;

	const dataSource = [
		{ icon: <FormOutlined />, text: ' Player Season Grades' },
		{ icon: <AreaChartOutlined />, text: ' Efficient Production Score' },
		{ icon: <BarChartOutlined />, text: ' Efficient Production Score Spread' },
		{ icon: <RiseOutlined />, text: ' Expected Wins' }
	];

	// TODO: Also update the navbar selectedIndex
	const handleLearnMore = (event) => {
		event.preventDefault();
		navigate('../overview', { replace: true });
	};

	return (
		<div
			className={css`
			`}
		>
			<Typography.Title level={1} style={{ margin: 30 }}>
				{statsAndGradesBodyTitle}
			</Typography.Title>
			<Typography.Title level={4} style={{ marginLeft: 30 }}>
				{statsAndGradesBodySection}
			</Typography.Title>
			<Divider />
			<Button type="link" onClick={handleLearnMore}>
				Learn More
			</Button>

			<List
				header={<strong>Read each bullet below to learn more about our statistic offerings</strong>}
				dataSource={dataSource}
				renderItem={(item) => (
					<List.Item>
						{item.icon}
						{`${item.text}`}
					</List.Item>
				)}
			/>

			<Divider />

			<Row>
				<Col>
					<Card title="Player Season Grades" style={{ width: 250 }}>
						<img
							src={require('../../assets/NBA_Giannis.jpeg')}
							style={{ maxWidth: 200, marginRight: 10 }}
						/>
						<Divider />
						<Typography.Text>{playerSeasonGradeDescription}</Typography.Text>
					</Card>
				</Col>

				<Card title="Efficient Production Score" style={{ width: 250 }}>
					<img src={require('../../assets/NCAA_Indiana.jpeg')} style={{ maxWidth: 200, marginRight: 10 }} />
					<Divider />
					<Typography.Text>{efficientProductionScoreDescription}</Typography.Text>
				</Card>
				<Card title="Efficient Production Score Spread" style={{ width: 350 }}>
					<img src={require('../../assets/NBA_Brooklyn.jpeg')} style={{ maxWidth: 280, marginRight: 10 }} />
					<Divider />
					<Typography.Text>{efficientProductionScoreSpreadDescription}</Typography.Text>
				</Card>
				<Card title="Expected Wins" style={{ width: 250 }}>
					<img src={require('../../assets/NCAA_UCLA.jpeg')} style={{ maxWidth: 200, marginRight: 10 }} />
					<Divider />
					<Typography.Text>{expectedWinsDescription}</Typography.Text>
				</Card>
			</Row>
		</div>
	);
};

export default StatsAndGradesBody;


