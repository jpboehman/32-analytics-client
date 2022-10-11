import { Card, Divider, Space, Typography } from 'antd';

import { css } from '@emotion/css';

const { Title } = Typography;

export const TeamEPSSDesc = ({ leagueType }) => (
	<div
		className={css`
			justify-content: center;
			align-items: center;
		`}
	>
		{/* TODO: Add button that takes user to subscription */}
		<Card title="What is Team EPSS?" bordered style={{ width: 1000, margin: 30 }}>
			<Title level={4}>
				Efficient Production Score Spread (EPSS) is the difference or spread between a team’s Efficient
				Production Score (EPS) and their opponent’s EPS. The EPSS stat is our way to measure team performance.
				Historically, a team’s EPSS and win percentage are strongly correlated. EPSS = (Team EPS – Opponent EPS)
			</Title>
		</Card>
	</div>
);

export default TeamEPSSDesc;
