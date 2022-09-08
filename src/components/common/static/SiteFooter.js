import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Card, Divider, Menu, Typography } from 'antd';

import { css } from '@emotion/css';

const { Title } = Typography;

export const SiteFooter = () => (
	<div
		className={css`
			justify-content: center;
			align-items: center;
		`}
	>
		{/* TODO: Add button that takes user to subscription */}
		<Card bordered>
			{/* Within each card, have a menu with links */}
			<Menu
				theme="dark"
				mode="vertical"
				defaultSelectedKeys={[ '0' ]}
				style={{ justifyContent: 'center', alignItems: 'center' }}
			>
				<Menu.SubMenu title="Our Statistics And Grades">
					<div
						className={css`
							margin-left: 10px;
							margin-top: 20px;
						`}
					>
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
					<Link to="/nba-player-season-grades-eps">
						<Menu.Item key="nbaPlayer">NBA Player Season Grades and EPS</Menu.Item>
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/nba-team-epss">
						<Menu.Item key="nbaTeam">NBA Team EPSS</Menu.Item>
					</Link>
				</Menu.Item>
				<Menu.Item key="nbaExpectedWins">NBA Expected Wins</Menu.Item>
			</Menu>
		</Card>
	</div>
);

export default SiteFooter;
