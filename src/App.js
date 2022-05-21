import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from 'antd';
import './App.css';

import AuthService from './services/auth.service';

import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/AboutUs/Home';
import Profile from './components/Profile';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/BoardAdmin';
import Overview from './components/Overview';
import StatsAndGrades from './components/StatsAndGrades';
import { Menu } from 'antd';

import EventBus from './common/EventBus';
import { css, } from '@emotion/css';

const App = () => {
	const { Header, Footer, Content } = Layout;
	const [ showModeratorBoard, setShowModeratorBoard ] = useState(false);
	const [ showAdminBoard, setShowAdminBoard ] = useState(false);
	const [ currentUser, setCurrentUser ] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
			setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
			setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
		}

		EventBus.on('logout', () => {
			logOut();
		});

		return () => {
			EventBus.remove('logout');
		};
	}, []);

	const logOut = () => {
		AuthService.logout();
		setShowModeratorBoard(false);
		setShowAdminBoard(false);
		setCurrentUser(undefined);
	};

	return (
		<div>
			<Layout>
				<Header>
					<div
						className={css`
							float: center;
							width: 100%;
						`}
					/>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '0' ]}>
						<Menu.Item>
							<Link to="/">32Analytics</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/overview">Our Stats Explained</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/stats-and-grades">Statistics And Grades</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/contact-us">Contact Us</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content />
			</Layout>
			<div>
        {/* TODO: Determine what routes to keep and what to refactor */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/user" element={<BoardUser />} />
					<Route path="/mod" element={<BoardModerator />} />
					<Route path="/admin" element={<BoardAdmin />} />
					<Route path="/overview" element={<Overview />} />
					<Route path="/stats-and-grades" element={<StatsAndGrades />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
