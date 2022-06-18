import React from 'react';

import { Layout, Descriptions, Typography, Divider } from 'antd';

import { css } from '@emotion/css';

import { WhereToFindUs } from '../common/WhereToFindUs';

// TODO: Add images to background of text content
export const OurStatsExplainedBody = () => {
	const ourStatsExplainedBodyTitle = 'Player Season Grade';
	const ourStatsExplainedBodyDescription = `The Player Season Grade statistic grades a player’s season on a scale of 0-100.
    The grade is calculated through the use of traditional box score stats, advanced stats, and our very own EPS statistic.
    The main purpose of Player Season Grades is to take all the statistics that go into evaluating a player’s performance and simplify it down to one number.
    This offers an alternative way of evaluating player performance.
    Please keep in mind that the statistic doesn’t attempt to rate players but strictly grade their season.`;

	return (
		<div
			className={css`
				margin-left: 250px;
				margin-right: 200px;
			`}
		>
			<Typography.Title level={1} style={{ margin: 30 }}>
				{ourStatsExplainedBodyTitle}
			</Typography.Title>
			<Divider />
			{/* box-decoration-break: clone; Each box fragment is rendered independently with the specified border, 
            padding and margin wrapping each fragment. The border-radius, border-image and box-shadow, 
            are applied to each fragment independently. */}
			<span
				className={css`
					margin-left: 30px;
					box-decoration-break: clone;
					font-size: 20px;
				`}
			>
				{ourStatsExplainedBodyDescription}
			</span>
		</div>
	);
};

export default OurStatsExplainedBody;
