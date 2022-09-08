import { Card, Divider, Space, Typography } from 'antd';

import { css } from '@emotion/css';

const { Title } = Typography;

export const PlayerSeasonGradesDesc = () => (
	<div
		className={css`
			justify-content: center;
			align-items: center;
		`}
	>
		{/* TODO: Add button that takes user to subscription */}
		<Card title="WHAT ARE NBA PLAYER SEASON GRADES?" bordered style={{ width: 1000, margin: 30 }}>
			<Title level={4}>
				The Player Season Grade statistic grades a player’s season on a scale of 0-100. The grade is calculated
				through the use of traditional box score stats, advanced stats, and our very own EPS statistic. The main
				purpose of Player Season Grades is to take all the statistics that go into evaluating a player’s
				performance and simplify it down to one number. This offers an alternative way of evaluating player
				performance. Please keep in mind that the statistic doesn’t attempt to rate players but strictly grade
				their season.
			</Title>
		</Card>
	</div>
);

export default PlayerSeasonGradesDesc;
