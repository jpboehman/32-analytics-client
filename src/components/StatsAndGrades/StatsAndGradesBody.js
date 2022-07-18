import React from 'react';

import { useNavigate } from "react-router-dom";

import { Button, List, Typography, Divider } from 'antd';

import { css } from '@emotion/css';

import { AreaChartOutlined, BarChartOutlined, FormOutlined, RiseOutlined } from '@ant-design/icons';


// TODO: Add images to background of text content
export const StatsAndGradesBody = () => {
	const statsAndGradesBodyTitle = 'Read each bullet below to learn more about our statistic offerings';
	const statsAndGradesBodySection = 'What are Player Season Grades?';
	const navigate = useNavigate();
	
	const dataSource = [
		{ icon: <FormOutlined />, text: 'Player Season Grades' },
		{ icon: <AreaChartOutlined />, text: 'Efficient Production Score' },
		{ icon: <BarChartOutlined />, text: 'Efficient Production Score Spread' },
		{ icon: <RiseOutlined />, text: 'Expected Wins' },
	]

	// TODO: Also update the navbar selectedIndex
	const handleLearnMore = (event) => {
		event.preventDefault();
		navigate('../overview', { replace: true })
	}

	return (
		<div
			className={css`
				margin-left: 250px;
				margin-right: 200px;
			`}
		>
			<Typography.Title level={1} style={{ margin: 30 }}>
				{statsAndGradesBodyTitle}
			</Typography.Title>
			<Typography.Title level={4} style={{ marginLeft: 30 }}>
				{statsAndGradesBodySection}
			</Typography.Title>
			<Divider />
			<Button type="link" onClick={handleLearnMore}>Learn More</Button>

			<List
				header={<>
				<strong>Read each bullet below to learn more about our statistic offerings</strong> </>}
				dataSource={dataSource}
				renderItem={(item) => (
					<List.Item>
						{item.icon}{`${item.text}`}
					</List.Item>
				)}
			/>


		</div>
	);
};

export default StatsAndGradesBody;
