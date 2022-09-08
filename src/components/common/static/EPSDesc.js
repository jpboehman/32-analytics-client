import { Card, Divider, Space, Typography } from 'antd';

import { css } from '@emotion/css';

const { Title } = Typography;

export const EpsDesc = () => (
	<div
		className={css`
			justify-content: center;
			align-items: center;
		`}
	>
		{/* TODO: Add button that takes user to subscription */}
		<Card title="WHAT IS EPS?" bordered style={{ width: 1000, margin: 30 }}>
			<Title level={3}>
				Efficient Production Score (EPS) attempts to measure a player’s performance by applying linear weights
				to traditional box score statistics. The EPS statistic is our way of understanding how efficiently a
				player contributes to their team.
			</Title>
		</Card>
	</div>
);

export default EpsDesc;
