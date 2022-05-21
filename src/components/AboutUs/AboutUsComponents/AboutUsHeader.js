import React from 'react';

import { Row, Col, Layout, Descriptions, Typography, Divider } from 'antd';

import { css } from '@emotion/css';

export const AboutUsHeader = () => {
	const { Title } = Typography;
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content>
					<div className={css`background: #fff;`} />
					<Descriptions>
						<Descriptions.Item>
							<Title>OUR FOUNDING</Title>
						</Descriptions.Item>
						<br />
						<Descriptions.Item>
							<Title level={2}>{ourFoundingDescription}</Title>
						</Descriptions.Item>
					</Descriptions>
				</Content>
			</Layout>
		</div>
	);
};

const ourFoundingDescription = `32 Analytics was founded by two former managers and one former Graduate Assistant at
								Marquette University Men’s basketball. Having first hand experience of the value
								statistics provide in college basketball, what was once a passion project quickly turned
								into an opportunity to provide the world with the data we have created.`;

export default AboutUsHeader;
