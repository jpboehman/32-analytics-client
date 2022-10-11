import { Row, Col, PageHeader, Layout, Divider, Space, Spin, Table } from 'antd';

import { css } from '@emotion/css';

export const SmallLoader = () => (
	<div
		className={css`
			display: flex;
			justify-content: center;
			align-items: center;
		`}
	>
		<Space size="large">
			<Spin size="large" />
		</Space>
	</div>
);

export default SmallLoader;
