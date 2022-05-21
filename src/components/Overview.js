import React, { useState, useEffect } from 'react';

import UserService from '../services/user.service';

import { Row, Col, PageHeader, Menu, Breadcrumb, Layout } from 'antd';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import { css, cx } from '@emotion/css';

export const Overview = () => {
	const [ content, setContent ] = useState('');
	const { Header, Footer, Sider, Content } = Layout;

	// Likely replace to get actual content
	useEffect(() => {
		UserService.getPublicContent().then(
			(response) => {
				setContent(response.data);
			},
			(error) => {
				const _content = (error.response && error.response.data) || error.message || error.toString();

				setContent(_content);
			}
		);
	}, []);

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
};

export default Overview;