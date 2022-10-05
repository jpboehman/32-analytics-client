import React from 'react';

import { Button, Row, Col, Divider, Layout, Form, Input } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

import { css } from '@emotion/css';
import UserService from '../services/user.service';
import SiteFooter from './common/static/SiteFooter';
const { TextArea } = Input;

const ContactUsHeader = () => {
	const contactUs = 'Contact 32 Analytics';
	return (
		<div style={{ textAlign: 'center', justifyContent: 'center' }}>
			<h1
				className={css`
					padding: 30px;
					font-size: 100px;
				`}
			>
				{contactUs}
				<Divider />
			</h1>
		</div>
	);
};

const FillOutOurContactForm = () => {
	const fillOutForm = 'Fill out our contact form:';
	const onFinish = (values) => {
		console.log('Success:', values);
		// Function to clear form inputs
	};

	const layout = {
		labelCol: {
			span: 8
		}
		// wrapperCol: {
		// 	span:
		// }
	};
	/* eslint-disable no-template-curly-in-string */

	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
			number: '${label} is not a valid number!'
		},
		number: {
			range: '${label} must be between ${min} and ${max}'
		}
	};
	return (
		<div style={{ textAlign: 'center', justifyContent: 'center' }}>
			<h3 className={css`padding: 15px;`}>
				{fillOutForm}
				<Divider />
				{/* Insert web form here */}
				<div
					className={css`
						display: flex;
						justify-content: center;
						align-items: center;
					`}
				>
					<Form
						name="cf"
						method="post"
						onFinish={onFinish}
						layout="vertical"
						validateMessages={validateMessages}
					>
						{/* This is the hidden field that the netlify-honeypot uses. */}

						<Form.Item
							className={css`width: 400px;`}
							label="Name"
							rules={[ { required: true, message: `Please enter your name.` } ]}
							name="name"
						>
							<Input placeholder="Name" prefix={<UserOutlined className="site-form-item-icon" />} />
						</Form.Item>

						<Form.Item
							label="Email"
							rules={[ { required: true, type: `email`, message: `Please enter your email.` } ]}
							name="email"
						>
							<Input placeholder="Your Email" prefix={<MailOutlined className="site-form-item-icon" />} />
						</Form.Item>

						<Form.Item
							label="Message"
							rules={[ { required: true, message: `Please enter your message.` } ]}
							name="message"
						>
							<TextArea placeholder="Your Message" rows={5} />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit" disabled={false}>
								Send
							</Button>
						</Form.Item>
					</Form>
				</div>
			</h3>
		</div>
	);
};

export const ContactUs = () => {
	const { Footer, Content } = Layout;

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				
				<Content style={{ padding: '0 30px' }}>
					<div
						className={css`
							min-height: 80vh;
							min-width: 50vh;
							background: #fff;
							text-align: center;
							justify-content: center;
						`}
					>
						<img src={require('../assets/32AnalyticsLogoFULL.png')} style={{ maxWidth: 400 }} />
						<ContactUsHeader />
						<FillOutOurContactForm />
					</div>
					<SiteFooter />
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
