import { Row, Col, PageHeader, Layout, Divider, Space, Spin, Table } from 'antd';

import { css } from '@emotion/css';

export const SmallLoader = () => (
	<div
		className={css`
			justify-content: center;
			align-items: center;
		`}
	>
		<Space size="middle">
			<Spin size="large" />
		</Space>
	</div>
);

export default SmallLoader;
