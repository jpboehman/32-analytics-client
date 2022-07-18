import React, { useState, useEffect } from 'react';

import UserService from '../../services/user.service';

import AboutUsHeader from '../../components/AboutUs/AboutUsComponents/AboutUsHeader';

import { Row, Col, PageHeader, Layout } from 'antd';

import { css, cx } from '@emotion/css';

export const Home = () => {
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content style={{ padding: '0 25px' }}>
					<PageHeader title="About Us" subTitle="About 32Analytics" />
					<div
						className={css`
							min-height: 80vh;
							min-width: 50vh;
							background: #fff;
						`}
					>
						<AboutUsHeader />
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

export default Home;
