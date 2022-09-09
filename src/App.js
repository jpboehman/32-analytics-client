import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
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
import OurStatsExplained from './components/OurStatsExplained';
import StatsAndGrades from './components/StatsAndGrades';
import NBAPlayerSeasonGradesAndEPSPage from './components/NBAPlayerSeasonGradesAndEPS/NBAPlayerSeasonGradesAndEPSPage';
import NBATeamEPSSPage from './components/NBATeamEPSS/NBATeamEPSSPage';
import { Menu } from 'antd';

import EventBus from './common/EventBus';
import { css } from '@emotion/css';

const App = () => {
	const { Header, Content } = Layout;
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

	// TODO: Make another effect for when the selected index is changed via a link in another component to make sure navbar reflects correctly

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
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={[ '0' ]}
						style={{ justifyContent: 'center', alignItems: 'center' }}
					>
						<Menu.Item>
							<Link to="/">32Analytics</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/overview">Our Stats Explained</Link>
						</Menu.Item>
						<Menu.SubMenu title="Statistics And Grades">
							<div
								className={css`
									margin-left: 10px;
									margin-top: 20px;
								`}
							>
								<Link to="/stats-and-grades">NBA Statistics And Grades</Link>
								<Menu.ItemGroup key="NBA" className={css`margin-bottom: 20px;`}>
									<Link to="/nba-player-season-grades-eps">
										<Menu.Item key="nbaPlayer">NBA Player Season Grades and EPS</Menu.Item>
									</Link>
									<Link to="/nba-team-epss">
										<Menu.Item key="nbaTeam">NBA Team EPSS</Menu.Item>
									</Link>
									<Menu.Item key="nbaExpectedWins">NBA Expected Wins</Menu.Item>
								</Menu.ItemGroup>
								<Link to="/stats-and-grades">NCAA Statistics And Grades</Link>
								<Menu.ItemGroup key="NCAA">
									<Menu.Item key="ncaaPlayer">NCAA Player Season Grades and EPS</Menu.Item>
									<Menu.Item key="ncaaTeam">NCAA Team EPSS</Menu.Item>
									<Menu.Item key="ncaaExpectedWins">NCAA Expected Wins</Menu.Item>
								</Menu.ItemGroup>
							</div>
							<Menu.Item key="NCAA" />
						</Menu.SubMenu>
						<Menu.Item>
							<Link to="/contact-us">Contact Us</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/login">Login / Register</Link>
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
					{/* // Ensure that the login page is the inital landing page */}
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/stats-and-grades" element={<StatsAndGrades />} />
					<Route path="/nba-player-season-grades-eps" element={<NBAPlayerSeasonGradesAndEPSPage />} />
					<Route path="/nba-team-epss" element={<NBATeamEPSSPage />} />
					{/* TODO: Update the pages for these links */}
					<Route path="/ncaa-player-season-grades-eps" element={<NBAPlayerSeasonGradesAndEPSPage />} />
					<Route path="/ncaa-team-epss" element={<NBATeamEPSSPage />} />
					<Route path="/ncaa-expected-wins" element={<NBATeamEPSSPage />} />
					<Route path="/user" element={<BoardUser />} />
					<Route path="/mod" element={<BoardModerator />} />
					<Route path="/admin" element={<BoardAdmin />} />
					<Route path="/overview" element={<OurStatsExplained />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
