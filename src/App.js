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
import { Menu, Typography } from 'antd';

import EventBus from './common/EventBus';
import { css } from '@emotion/css';
import NCAAPlayerSeasonGradesAndEPSPage from './components/NCAAPlayerSeasonGradesAndEPS/NCAAPlayerSeasonGradesAndEPSPage';
import NCAATeamEPSSPage from './components/NCAATeamEPSS/NCAATeamEPSSPage';
import NCAAExpectedWinsPage from './components/NCAAExpectedWins/NCAAExpectedWins';
import NBAExpectedWinsPage from './components/NBAExpectedWins/NBAExpectedWinsPage';

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
				<Header style={{ backgroundImage: `url(${require('../src/assets/hardwood3chop.jpeg')})` }}>
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
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							backgroundImage: `url(${require('../src/assets/hardwood3chop.jpeg')})`
						}}
					>
						<Menu.Item>
							<Link to="/">
								<Typography.Title className={css`color: black;`} level={3}>
									32Analytics
								</Typography.Title>
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/overview">
								<Typography.Title className={css`color: black;`} level={3}>
									Our Stats Explained
								</Typography.Title>
							</Link>
						</Menu.Item>
						<Menu.SubMenu
							title={
								<Typography.Title className={css`color: black;`} level={3}>
									Statistics & Grades
								</Typography.Title>
							}
							style={{ color: 'black', fontSize: 20 }}
						>
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
									<Link to="/nba-expected-wins">
										<Menu.Item key="nbaExpectedWins">NBA Expected Wins</Menu.Item>
									</Link>
								</Menu.ItemGroup>
								<Link to="/stats-and-grades">NCAA Statistics And Grades</Link>
								<Menu.ItemGroup key="NCAA">
									<Link to="/ncaa-player-season-grades-eps">
										<Menu.Item key="ncaaPlayer">NCAA Player Season Grades and EPS</Menu.Item>
									</Link>
									<Link to="/ncaa-team-epss">
										<Menu.Item key="ncaaTeam">NCAA Team EPSS</Menu.Item>
									</Link>
									<Link to="ncaa-expected-wins">
										<Menu.Item key="ncaaExpectedWins">NCAA Expected Wins</Menu.Item>
									</Link>
								</Menu.ItemGroup>
							</div>
							<Menu.Item key="NCAA" />
						</Menu.SubMenu>
						<Menu.Item>
							<Link to="/contact-us">
								<span className={css`color: black;`}>
									<Typography.Title className={css`color: black;`} level={3}>
										Contact Us
									</Typography.Title>
								</span>
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/login">
								<Typography.Title className={css`color: black;`} level={3}>
									Login / Register
								</Typography.Title>
							</Link>
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
					<Route path="/nba-expected-wins" element={<NBAExpectedWinsPage />} />
					<Route path="/ncaa-player-season-grades-eps" element={<NCAAPlayerSeasonGradesAndEPSPage />} />
					<Route path="/ncaa-team-epss" element={<NCAATeamEPSSPage />} />
					<Route path="/ncaa-expected-wins" element={<NCAAExpectedWinsPage />} />
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
