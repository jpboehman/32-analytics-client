import React from 'react';

import { Layout, Descriptions, Typography, Divider } from 'antd';

import { css } from '@emotion/css';

import { WhereToFindUs } from '../common/WhereToFindUs';

// TODO: Add images to background of text content
export const OurStatsExplainedHeader = () => {
	const ourStatsExplainedHeaderText = 'Our Stats Explained';
	return (
		<div style={{ textAlign: 'center', justifyContent: 'center' }}>
			<h1
				className={css`
					padding: 30px;
					font-size: 100px;
				`}
			>
				{ourStatsExplainedHeaderText}
			</h1>
		</div>
	);
};

export default OurStatsExplainedHeader;
