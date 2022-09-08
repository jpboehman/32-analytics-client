import { Card, Divider, Space, Typography } from 'antd';

import { css } from '@emotion/css';

const { Title } = Typography;

export const SubscribeToday = () => (
	<div
		className={css`
			justify-content: center;
			align-items: center;
		`}
	>
		{/* TODO: Add button that takes user to subscription */}
		<Card title="SUBSCRIBE" bordered style={{ width: 1000, margin: 30 }}>
			<Title level={3}>
				Subscribe Today for $30 to Receive Unlimited Access To Our Statistics from the Past 5 Years
			</Title>
		</Card>
	</div>
);

export default SubscribeToday;
