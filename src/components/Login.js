import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import AuthService from '../services/auth.service';
import { css } from '@emotion/css';
import SiteFooter from './common/static/SiteFooter';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required.
			</div>
		);
	}
};

export const Login = () => {
	const navigate = useNavigate();

	const form = useRef();
	const checkBtn = useRef();

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const [ message, setMessage ] = useState('');

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		setMessage('');
		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			AuthService.login(username, password).then(
				() => {
					navigate('/profile');
					window.location.reload();
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();

					setLoading(false);
					setMessage(resMessage);
				}
			);
		} else {
			setLoading(false);
		}
	};

	return (
		<div
			className={css`
				text-align: center;
				justify-content: center;
			`}
		>
			<div
				className={css`
					padding-top: 300px;
					padding-right: 300px;
					padding-left: 300px;
					margin-right: 400px;
					margin-left: 400px;
				`}
			>
				<Card title={`Login`}>
					<Form
						onSubmit={handleLogin}
						ref={form}
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 14 }}
						layout="vertical"
						size="default"
					>
						<div className="form-group">
							<label htmlFor="username" className={css`margin-right: 5px;`}>
								Username
							</label>
							<UserOutlined />
							<Input
								type="text"
								className="form-control"
								name="username"
								value={username}
								onChange={onChangeUsername}
								validations={[ required ]}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password" className={css`margin-right: 5px;`}>
								Password
							</label>{' '}
							<LockOutlined />
							<Input
								type="password"
								className="form-control"
								name="password"
								value={password}
								onChange={onChangePassword}
								validations={[ required ]}
							/>
						</div>

						<div className="form-group">
							<button className="btn btn-primary btn-block" disabled={loading}>
								{loading && <span className="spinner-border spinner-border-sm" />}
								<span>Login</span>
							</button>
						</div>

						{message && (
							<div className="form-group">
								<div className="alert alert-danger" role="alert">
									{message}
								</div>
							</div>
						)}
						<CheckButton style={{ display: 'none' }} ref={checkBtn} />
					</Form>
				</Card>
			</div>
			<SiteFooter />
		</div>
	);
};

export default Login;
