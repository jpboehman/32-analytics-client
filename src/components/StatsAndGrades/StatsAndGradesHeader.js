import React from 'react';

import { css } from '@emotion/css';

// TODO: Add images to background of text content
export const StatsAndGradesHeader = () => {
	const analysisBeyongTheBoxScoreHeaderText = 'Analysis Beyond The Box Score';
	return (
		<div style={{ textAlign: 'center', justifyContent: 'center' }}>
			<h1
				className={css`
					padding: 30px;
					font-size: 100px;
				`}
			>
				{analysisBeyongTheBoxScoreHeaderText}
			</h1>
		</div>
	);
};

export default StatsAndGradesHeader;
