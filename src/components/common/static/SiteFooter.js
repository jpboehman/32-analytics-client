import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Card, Divider, Menu, Typography, Row } from 'antd';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

import { css } from '@emotion/css';

const { Title } = Typography;

export const SiteFooter = () => (
	<div
		className={css`
			display: flex;
			justify-content: center;
			align-items: center;
		`}
	>
		{/* TODO: Add button that takes user to subscription */}
		<Row>
			<Divider />
			<Card bordered title="Our statistics and Grades" style={{ width: 350 }}>
				{/* Within each card, have a menu with links */}
				<Menu
					theme="dark"
					mode="vertical"
					defaultSelectedKeys={[ '0' ]}
					style={{ justifyContent: 'center', alignItems: 'center' }}
				>
					<Menu.Item>
						<Link to="/nba-player-season-grades-eps">
							<Menu.Item key="nbaPlayer">NBA Player Season Grades and EPS</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/nba-team-epss">
							<Menu.Item key="nbaTeam">NBA Team EPSS</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/nba-expected-wins">
							<Menu.Item key="nbaTeam">NBA Expected Wins</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/ncaa-player-season-grades-eps">
							<Menu.Item key="ncaaaPlayerEps">NCAA Player Season Grades and EPS</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/ncaa-team-epss">
							<Menu.Item key="ncaaaPlayerEps">NCAA Team EPSS</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/ncaa-team-expected-wins">
							<Menu.Item key="ncaaaPlayerEps">NCAA Expected Wins</Menu.Item>
						</Link>
					</Menu.Item>
				</Menu>
			</Card>
			<Card bordered title="Useful Links" style={{ width: 250 }}>
				<Menu
					theme="dark"
					mode="vertical"
					defaultSelectedKeys={[ '0' ]}
					style={{ justifyContent: 'center', alignItems: 'center' }}
				>
					<Menu.Item>
						<Link to="/subscribe">
							<Menu.Item key="subscribe">Subscribe</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/">
							<Menu.Item key="aboutUs">About Us</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/contact-us">
							<Menu.Item key="contactUs">Contact Us</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/stats-and-grades">
							<Menu.Item key="statsAndGrades">Stats and Grades</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/overview">
							<Menu.Item key="ourStatsExplained">Our Stats Explained</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/profile">
							<Menu.Item key="ncaaPlayerEps">Account</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/terms-and-conditions">
							<Menu.Item key="termsAndConditions">Terms and Conditions</Menu.Item>
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/privacy-policy">
							<Menu.Item key="privacyPolicy">Privacy Policy</Menu.Item>
						</Link>
					</Menu.Item>
				</Menu>
			</Card>
			<Card bordered title="Contact 32Analytics" style={{ width: 380 }}>
				<Menu
					theme="dark"
					mode="vertical"
					defaultSelectedKeys={[ '0' ]}
					style={{ justifyContent: 'center', alignItems: 'center' }}
				>
					<div className={css`display: flex;`}>
						<TwitterOutlined style={{ fontSize: '600%' }} />
						<h1
							className={css`
								margin-top: 20px;
								margin-left: 40px;
								font-size: 20px;
								color: white
							`}
						>
							32_ANALYTICS
						</h1>
					</div>
					<div className={css`display: flex;`}>
						<InstagramOutlined style={{ fontSize: '600%' }} />
						<h1
							className={css`
								margin-top: 20px;
								margin-left: 40px;
								font-size: 20px;
								color: white
							`}
						>
							32_ANALYTICS
						</h1>
					</div>
					<div className={css`display: flex;`}>
						<FacebookOutlined style={{ fontSize: '600%' }} />
						<h1
							className={css`
								margin-top: 20px;
								margin-left: 40px;
								font-size: 20px;
								color: white
							`}
						>
							32_ANALYTICS
						</h1>
					</div>
				</Menu>
			</Card>
		</Row>
	</div>
);

export default SiteFooter;
