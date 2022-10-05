import React from 'react';

import { css } from '@emotion/css';

// TODO: Add images to background of text content
export const OurStatsExplainedHeader = () => {
	const ourStatsExplainedHeaderText = 'Our Stats Explained';
	return (
		<div style={{ textAlign: 'center', justifyContent: 'center' }}>
			<img src={require('../../assets/32AnalyticsLogoFULL.png')} style={{ maxWidth: 400 }} />
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
