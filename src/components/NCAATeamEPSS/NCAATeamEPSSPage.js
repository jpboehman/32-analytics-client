import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Button, Card, Divider, Menu, Typography } from 'antd';
import { useSelector } from 'react-redux';
import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import PlayerSeasonGradesDesc from '../common/static/PlayerSeasonGradesDesc';
import Footer from '../common/static/Footer';
import Datatable6 from '../dataTables/6/Datatable6';
import chosenYear from '../common/static/statisticalSeasons';
import ScrollToTop from '../../common/scroll/SrollToTop';

// TODO: Add images to background of text content
export const NCAATeamEPSSPage = () => {
	const [ ncaaTeamEpss, setNcaaTeamEpss ] = useState([]);
	const [ selectedYear, setSelectedYear ] = useState(chosenYear[20222023]);
	const currentUser = useSelector((state) => state.currentUser?.payload);
	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNcaaTeamEpss(results.data.slice(0, 100));
					} else {
						setNcaaTeamEpss(results.data);
					}
				}
			}
		);
	}, []);

	const fixedHeaderText = 'NCAA Team EPSS';
	const SeasonSelector = () => {
		// Place seasonMenu in a Card
		return (
			<div>
				<Card title='Select season:'>
					<Menu mode='horizontal' defaultSelectedKeys={selectedYear} theme='light'>
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
					backgroundImage: `url(${require('../../assets/NCAA_TEAM_EPSS.png')})`,
					height: '60vh',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					marginTop: -50
				}}
			>
				<Typography.Title
					level={1}
					style={{ color: '#fff', marginTop: 105, display: 'flex', justifyContent: 'center' }}
				>
					{fixedHeaderText}
				</Typography.Title>
			</div>
		);
	};

	return (
		<div className={css`padding: 10px;`}>
			<Background />
			{!currentUser && <SubscribeToday />}
			<Divider />
			<PlayerSeasonGradesDesc leagueType="NCAA" />
			{currentUser && <SeasonSelector />}
			{currentUser && <div>{ncaaTeamEpss.length ? <Datatable6 selectedSeason={selectedYear}/> : <SmallLoader />}</div>}
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default NCAATeamEPSSPage;
