import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Row, Col, Divider, Layout, Form, Input, Card } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';
import Footer from '../common/static/Footer';
import StripeContainer from '../StripeContainer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { generalRequest } from '../../services/httpService';
import ScrollToTop from '../../common/scroll/SrollToTop';

const CARD_OPTIONS = {
	iconStyle: 'solid',
	style: {
		base: {
			iconColor: 'navy',
			fontWeight: 500,
			fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
			fontSize: '20px',
			fontSmoothing: 'antialiased',
			':-webkit-autofill': { color: '#fce883' },
			'::placeholder': { color: '#87bbfd' }
		},
		invalid: {
			iconColor: 'red',
			color: 'red'
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
					font-size: 50px;
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
	const [ lastname, setLastname ] = useState(false);
	const [ email, setEmail ] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	const [ stripeErrorMessage, setStripeErrorMessage ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Makeing sure to disable form submission until Stripe.js has loaded.
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement)
		});

		if (!error) {
			try {
				const { id } = paymentMethod;
				const { data } = await generalRequest.post('/auth/stripe-payment', {
					amount: 3000,
					id
				});

				if (data.success) {
					console.log(data);
					console.log('Successful payment');
					localStorage.setItem('idx', uuidv4());
					localStorage.setItem('ids', id);
					setSuccess(true);
					setTimeout(() => {
						window.location.pathname = '/register';
					}, 10000);
				}
			} catch (error) {
				console.log('Error', error);
			}
		} else {
			console.log(error.message);
			setStripeErrorMessage(`Payment failed - please double-check information and try again.`);
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
		<div>
			{!success ? (
				<div style={{ textAlign: 'center', justifyContent: 'center' }}>
					<h3 className={css`padding: 25px;`}>
						<div
							className={css`
								display: flex;
								justify-content: center;
								align-items: center;
							`}
						>
							<Card title="Fill out our Subscription Form">
								<Form name="cf" layout="vertical" validateMessages={validateMessages}>
									{/* {       This is the hidden field that the netlify-honeypot uses.} */}
									<Form.Item
										className={css`width: 300px;`}
										label="First Name"
										rules={[
											{
												required: true,
												message: `Please enter your first name.`
											}
										]}
										name="firstName"
									>
										<Input
											placeholder="First Name"
											prefix={<UserOutlined className="site-form-item-icon" />}
										/>
									</Form.Item>
									<Form.Item
										className={css`width: 300px;`}
										label="Last Name"
										rules={[
											{
												required: true,
												message: `Please enter your last name.`
											}
										]}
										name="lastName"
									>
										<Input
											placeholder="Last Name"
											onChange={(e) => setLastname(e.target.value)}
											prefix={<UserOutlined className="site-form-item-icon" />}
										/>
									</Form.Item>
									<Form.Item
										className={css`width: 300px;`}
										label="Email"
										rules={[
											{
												required: true,
												type: `email`,
												message: `Please enter your email.`
											}
										]}
										name="email"
									>
										<Input
											placeholder="Your Email"
											onChange={(e) => setEmail(e.target.value)}
											prefix={<MailOutlined className="site-form-item-icon" />}
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
										className={css`
											width: 300px;
											align-items: center;
										`}
										rules={[
											{
												required: true,
												type: `payment`,
												message: `Please enter your payment information.`
											}
										]}
										name="payment"
									>
										<Button
											style={{ borderRadius: '10px', marginLeft: '150px' }}
											type="primary"
											onClick={handleSubmit}
										>
											Subscribe
										</Button>
										{lastname &&
										stripeErrorMessage && (
											<p>
												{lastname},{stripeErrorMessage}
											</p>
										)}
									</Form.Item>
								</Form>
							</Card>
						</div>
					</h3>
				</div>
			) : (
				<div>
					<p
						style={{
							backgroundColor: 'darkkhaki',
							color: 'black',
							fonstSize: '16px',
							borderRadius: '10px',
							height: '200px',
							width: '40%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						Thank you for your payment, please wait a few seconds until you are redirected to create a
						username and password. You will be able to login with this account from here on out!
					</p>
				</div>
			)}
		</div>
	);
};

export const Subscribe = () => {
	const { Content } = Layout;

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content style={{ padding: '0 30px' }}>
					<div
						className={css`
              height: 300px
              width: 100%;
              text-align: center;
              justify-content: center;
            `}
					>
						<img src={require('../../assets/32AnalyticsLogoFULL.png')} style={{ maxWidth: 300 }} alt="" />
						<SubscribeHeader />
						<StripeContainer />
					</div>
					<Footer />
				</Content>
				<ScrollToTop />
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
