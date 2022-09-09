import React from 'react';

// import UserService from '../../services/user.service';

import AboutUsHeader from './AboutUsComponents/AboutUsHeader';
import SiteFooter from '../common/static/SiteFooter';

import { Row, Col, PageHeader, Layout } from 'antd';

import { css, cx } from '@emotion/css';

export const Home = () => {
	const { Footer, Content } = Layout;

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content style={{ padding: '0 25px' }}>
					<div
						className={css`
							min-height: 60vh;
							min-width: 50vh;
							background: #fff;
						`}
					>
						<AboutUsHeader />
					</div>
				</Content>
				<SiteFooter />
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
