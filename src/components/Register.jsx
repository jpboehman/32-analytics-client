import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { css } from '@emotion/css';
import { Card } from 'antd';
import { isEmail } from 'validator';
import { generalRequest } from '../services/httpService';

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required.
			</div>
		);
	}
};

const validEmail = (value) => {
	if (!isEmail(value)) {
		return (
			<div className="alert alert-danger" role="alert">
				This is not a valid email.
			</div>
		);
	}
};

const vusername = (value) => {
	if (value.length < 3 || value.length > 20) {
		return (
			<div className="alert alert-danger" role="alert">
				The username must be between 3 and 20 characters.
			</div>
		);
	}
};

const vpassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		return (
			<div className="alert alert-danger" role="alert">
				The password must be between 6 and 40 characters.
			</div>
		);
	}
};

function Register() {
	const form = useRef();
	const checkBtn = useRef();

	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ successful, setSuccessful ] = useState(false);
	const [ message, setMessage ] = useState('');

	const errorMessage = 'Invalid/Already in use details, please input unique parameters';

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		form.current.validateAll();

		const register = async () => {
			setMessage('');
			setSuccessful(false);
			const ID = localStorage.getItem('idx');
			const IDS = localStorage.getItem('ids');
			if (!ID && !IDS) {
				window.location.pathname = '/subscribe';
			}
			if (ID && IDS) {
				try {
					const res = await generalRequest.post('/auth/signup', {
						username,
						email,
						password
					});
					if (res.data.message) {
						setMessage(res.data.message);
						setSuccessful(true);
						setTimeout(function() {
							window.location.pathname = '/login';
						}, 1500);
					}
				} catch (err) {
					setSuccessful(false);
					setMessage(errorMessage);
				}
			}
		};
		checkBtn.current.context._errors.length === 0 && register();
	};

	return (
		<div className="col-md-12">
			<img
				src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
				alt="profile-img"
				style={{
					marginTop: '100px',
					height: '100px',
					width: '100px',
					objectFit: 'cover',
					marginLeft: '40%'
				}}
			/>
			<div
				className={css`
					padding: 50px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: center;
				`}
			>
				<Card title={Register}>
					<Form onSubmit={handleRegister} ref={form}>
						<div>
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<Input
									type="text"
									className="form-control"
									name="username"
									value={username}
									onChange={onChangeUsername}
									validations={[ required, vusername ]}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">Email</label>
								<Input
									type="text"
									className="form-control"
									name="email"
									value={email}
									onChange={onChangeEmail}
									validations={[ required, validEmail ]}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="password">Password</label>
								<Input
									type="password"
									className="form-control"
									name="password"
									value={password}
									onChange={onChangePassword}
									validations={[ required, vpassword ]}
								/>
							</div>

							<div className="form-group">
								<button className="btn btn-primary btn-block">Sign Up</button>
							</div>
						</div>
						{message && (
							<div className="form-group">
								<div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
									{message}
								</div>
							</div>
						)}
						<CheckButton style={{ display: 'none' }} ref={checkBtn} />
					</Form>
				</Card>
			</div>
		</div>
	);
}

export default Register;
