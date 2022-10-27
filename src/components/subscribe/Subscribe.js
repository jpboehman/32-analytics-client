import React, { useState } from 'react';

import { Button, Row, Col, Divider, Layout, Form, Input, Card } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

import axios from 'axios';
import { css } from '@emotion/css';
import UserService from '../../services/user.service';
import SiteFooter from '.././common/static/SiteFooter';
import StripeContainer from '../StripeContainer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
const { TextArea } = Input;

const CARD_OPTIONS = {
	iconStyle: 'solid',
	style: {
		base: {
			iconColor: '#c4f0ff',
			fontWeight: 500,
			fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
			fontSize: '16px',
			fontSmoothing: 'antialiased',
			':-webkit-autofill': { color: '#fce883' },
			'::placeholder': { color: '#87bbfd' }
		},
		invalid: {
			iconColor: '#ffc7ee',
			color: '#ffc7ee'
		}
	}
};

const SubscribeHeader = () => {
	return (
		<div style={{ textAlign: 'center', justifyContent: 'center' }}>
			<h1
				className={css`
					padding-top: 30px;
					padding-bottom: 0px;
					font-size: 100px;
				`}
			>
				Subscribe
				<Divider />
			</h1>
		</div>
	);
};

export const FillOutOurSubscribeForm = () => {
	const [ success, setSuccess ] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	/* eslint-disable no-template-curly-in-string */
	// Function to clear form inputs

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement)
		});

		if (!error) {
			try {
				const { id } = paymentMethod;
				const response = await axios.post('http://localhost:4000/payment', {
					amount: 1000,
					id
				});

				if (response.data.success) {
					console.log('Successful payment');
					setSuccess(true);
				}
			} catch (error) {
				console.log('Error', error);
			}
		} else {
			console.log(error.message);
		}
	};

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
				<div
					className={css`
						display: flex;
						justify-content: center;
						align-items: center;
					`}
				>
					{/* <CardElement options={CARD_OPTIONS} /> */}
					<Card title="Fill out our Subscription Form">
						<Form
							name="cf"
							method="post"
							onFinish={handleSubmit}
							layout="vertical"
							validateMessages={validateMessages}
						>
							{/* This is the hidden field that the netlify-honeypot uses. */}
							<Form.Item
								className={css`width: 400px;`}
								label="First Name"
								rules={[ { required: true, message: `Please enter your first name.` } ]}
								name="firstName"
							>
								<Input
									placeholder="First Name"
									prefix={<UserOutlined className="site-form-item-icon" />}
								/>
							</Form.Item>

							<Form.Item
								className={css`width: 400px;`}
								label="Last Name"
								rules={[ { required: true, message: `Please enter your last name.` } ]}
								name="lastName"
							>
								<Input
									placeholder="Last Name"
									prefix={<UserOutlined className="site-form-item-icon" />}
								/>
							</Form.Item>

							<Form.Item
								className={css`width: 400px;`}
								label="Email"
								rules={[ { required: true, type: `email`, message: `Please enter your email.` } ]}
								name="email"
							>
								<Input
									placeholder="Your Email"
									prefix={<MailOutlined className="site-form-item-icon" />}
								/>
							</Form.Item>

							<Form.Item
								className={css`width: 400px;`}
								label="Password"
								rules={[ { required: true, type: `password`, message: `Please enter your password.` } ]}
								name="password"
							>
								<Input
									placeholder="********"
									prefix={<UserOutlined className="site-form-item-icon" />}
								/>
							</Form.Item>

							<Form.Item
								className={css`width: 400px;`}
								label="Password Confirmation"
								rules={[
									{ required: true, type: `password`, message: `Please re-enter your password.` }
								]}
								name="passwordConfirmation"
							>
								<Input
									placeholder="Re-enter password"
									prefix={<UserOutlined className="site-form-item-icon" />}
								/>
							</Form.Item>

							<Form.Item
								className={css`width: 500px;`}
								label="Payment Information"
								rules={[
									{
										required: true,
										type: `payment`,
										message: `Please enter your payment information.`
									}
								]}
								name="payment"
							>
								<CardElement options={CARD_OPTIONS} />
							</Form.Item>

							<Form.Item
								className={css`width: 400px; align-items: center; j`}
								rules={[
									{
										required: true,
										type: `payment`,
										message: `Please enter your payment information.`
									}
								]}
								name="payment"
							>
								<Button type="primary" htmlType="submit" disabled={false}>
									Subscribe
								</Button>
							</Form.Item>
						</Form>
					</Card>
				</div>
			</h3>
		</div>
	);
};

export const Subscribe = () => {
	const { Footer, Content } = Layout;

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content style={{ padding: '0 30px' }}>
					<div
						className={css`
							min-height: 80vh;
							min-width: 50vh;
							text-align: center;
							justify-content: center;
						`}
					>
						<img src={require('../../assets/32AnalyticsLogoFULL.png')} style={{ maxWidth: 400 }} />
						<SubscribeHeader />

						<StripeContainer />
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

export default Subscribe;
