import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

import { Button, Card,	Layout, Divider, Menu, Typography } from 'antd';

import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import Footer from '../common/static/Footer';
import SubscribeToday from '../common/static/SubscribeToday';
import { useSelector } from 'react-redux';
import chosenYear from '../common/static/statisticalSeasons';
import ScrollToTop from '../../common/scroll/SrollToTop';
import Datatable3 from '../dataTables/3/Datatable3';

// TODO: Add images to background of text content
export const NBATeamEPSSPage = () => {
	const [ nbaTeamEPSS, setNBATeamEPSS ] = useState([]);
	const [ selectedYear, setSelectedYear ] = useState(chosenYear[20222023])
	const currentUser = useSelector((state) => state.currentUser?.payload);
	useEffect(() => {
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNBATeamEPSS(results.data.slice(0, 100));
					} else {
						setNBATeamEPSS(results.data);
					}
				}
			}
		);
	}, []);

	const fixedHeaderText = 'NBA Team EPSS';

	const SeasonSelector = () => {
		// Place seasonMenu in a Card
		return (
			<div>
				<Card title='Select season:'>
					<Menu mode='horizontal'>
						<Menu.Item>
							<Button onClick={() => setSelectedYear(chosenYear[20222023])}>2022-2023</Button>
						</Menu.Item>
						<Menu.Item>
							<Button onClick={() => setSelectedYear(chosenYear[20212022])}>2021-2022</Button>
						</Menu.Item>
						<Menu.Item>
							<Button onClick={() => setSelectedYear(chosenYear[20202021])}>2020-2021</Button>
						</Menu.Item>
						<Menu.Item>
							<Button onClick={() => setSelectedYear(chosenYear[20192020])}>2019-2020</Button>
						</Menu.Item>
						<Menu.Item>
							<Button onClick={() => setSelectedYear(chosenYear[20182019])}>2018-2019</Button>
						</Menu.Item>
						<Menu.Item>
							<Button onClick={() => setSelectedYear(chosenYear[20172018])}>2017-2018</Button>
						</Menu.Item>
					</Menu>
				</Card>
			</div>
		)
	}

	const Background = () => {
		return (
			<div
				style={{
					backgroundImage: `url(${require('../../assets/NBA_TEAM_EPSS.png')})`,
					height: '60vh',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					marginTop: 65
				}}
			>
				<Typography.Title level={1} style={{ color: 'white', marginLeft: 20 }}>
					{fixedHeaderText}
				</Typography.Title>
			</div>
		);
	};

	return (
		<div className={css``}>
			{!currentUser && <SubscribeToday />}
			<Background />
			<Divider />
			{currentUser && (
				<SeasonSelector />
			)}
			{currentUser && <div>{nbaTeamEPSS.length ? <Datatable3 selectedSeason={selectedYear}/> : <SmallLoader />}</div>}
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default NBATeamEPSSPage;
