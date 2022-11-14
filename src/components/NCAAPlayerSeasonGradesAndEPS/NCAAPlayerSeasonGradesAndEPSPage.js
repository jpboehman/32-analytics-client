import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Button, Card, Divider, Menu, Typography } from 'antd';
import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import PlayerSeasonGradesDesc from '../common/static/PlayerSeasonGradesDesc';
import Footer from '../common/static/Footer';
import { useSelector } from 'react-redux';
import Datatable5 from '../dataTables/5/Datatable5';
import ScrollToTop from '../../common/scroll/SrollToTop';

// TODO: Add images to background of text content
export const NCAAPlayerSeasonGradesAndEPSPage = () => {
	const [ncaaPlayerRatings, setNCAAPlayerRatings] = useState([]);
	const [selectedYear, setSelectedYear] = useState(chosenYear[20222023])
	const currentUser = useSelector((state) => state.currentUser?.payload);

	// sort by season?

	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
		try {
			Papa.parse(
				'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=0&single=true&output=csv',
				{
					download: true,
					header: true,
					complete: (results) => {
						setNCAAPlayerRatings(results.data);
					}
				}
			);
		} catch (error) {
			console.log(`error: ${JSON.stringify(error)}`)
		}

	}, [selectedYear]);

	const fixedHeaderText = 'NCAA Player Season Grades & EPS';

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
					backgroundImage: `url(${require('../../assets/NCAA_PLAYER_GRADES_EPS.png')})`,
					height: '60vh',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					marginTop: -50
				}}
			>
				<Typography.Title level={1} style={{ color: 'white', marginLeft: 20, marginTop: 115 }}>
					{fixedHeaderText}
				</Typography.Title>
			</div>
		);
	};

	console.log(selectedYear)

	return (
		<div className={css`padding: 10px;`}>
			<Background />
			{!currentUser && <SubscribeToday />}
			<Divider />
			<PlayerSeasonGradesDesc leagueType="NCAA" />
			{currentUser && (
				<SeasonSelector />
			)}
			{currentUser && <div>{ncaaPlayerRatings.length ? <Datatable5 selectedSeason={selectedYear} /> : <SmallLoader />}</div>}
			<ScrollToTop />
			<Footer />
		</div>
	);
};

// Evum for filtering on seasons
const chosenYear = {
	20172018: '2017-2018',
	20182019: '2018-2019',
	20192020: '2019-2020',
	20202021: '2020-2021',
	20212022: '2021-2022',
	20222023: '2022-2023',
}

export default NCAAPlayerSeasonGradesAndEPSPage;
