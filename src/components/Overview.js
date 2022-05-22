import React from 'react';

import { Row, Col, PageHeader, Layout } from 'antd';

import { css } from '@emotion/css';
import UserService from '../services/user.service';

export function Overview() {
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content style={{ padding: '0 50px' }}>
					<PageHeader title="Our stats explained" subTitle="Learn more about each statistic" />
					<div
						className={css`
							min-height: 80vh;
							min-width: 50vh;
							background: #fff;
						`}
					>
						Content
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>ThirtyTwo Analytics ©2020</Footer>
			</Layout>
			<Row>
				<Col span={1500} />
			</Row>
			<Row />
			<Row />
			<Row />
		</div>
	);
}

export default Overview;
