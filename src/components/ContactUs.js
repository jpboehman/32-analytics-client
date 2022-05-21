import React from 'react';

import UserService from '../services/user.service';

import { Row, Col, PageHeader, Layout } from 'antd';

import { css } from '@emotion/css';

export const ContactUs = () => {
	const { Footer, Content } = Layout;

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content style={{ padding: '0 50px' }}>
					<PageHeader
						title="TODO: Create contact form"
						subTitle="Please fill out our contact form and we will get back to you as soon as possible!"
					/>
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

export default ContactUs;
