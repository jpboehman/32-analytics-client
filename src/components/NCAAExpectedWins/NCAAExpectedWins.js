import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Button, Card, Divider, Menu, Typography } from 'antd';
import { useSelector } from 'react-redux';
import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import Footer from '../common/static/Footer';
import Datatable4 from '../dataTables/4/Datatable4';
import chosenYear from '../common/static/statisticalSeasons';
import ScrollToTop from '../../common/scroll/SrollToTop';

const { Title } = Typography;

// TODO: Add images to background of text content
export const NCAAExpectedWinsPage = () => {
	const [ncaaExpectedWins, setNcaaExpectedWins] = useState([]);
	const [selectedYear, setSelectedYear] = useState([]);
	const currentUser = useSelector((state) => state.currentUser?.payload);

	// effect to fetch data from google spreadzheets
	useEffect(() => {
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNcaaExpectedWins(results.data.slice(0, 100));
					} else {
						setNcaaExpectedWins(results.data);
					}
				}
			}
		);
	}, []);

	const fixedHeaderText = 'NCAA Expected Wins';
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
					backgroundImage: `url(${require('../../assets/NCAA_EXPECTED_WINS.png')})`,
					height: '50vh',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					marginTop: 65
				}}
			>
				<Typography.Title
					level={1}
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginBotttom: 5,
						color: 'white'
					}}
				>
					{fixedHeaderText}
				</Typography.Title>
			</div>
		);
	};

	return (
		<div className={css``}>
			<Background />
			{!currentUser && <SubscribeToday />}
			<Divider />
			<NCAAExpectedWinsDesc leagueType="NCAA" />
			{currentUser && <SeasonSelector />}
			{currentUser && <div>{ncaaExpectedWins.length ? <Datatable4 selectedSeason={selectedYear}/> : <SmallLoader />}</div>}
			<ScrollToTop />
			<Footer />
		</div>
	);
};

const NCAAExpectedWinsDesc = ({ leagueType }) => (
	<div
		className={css`
			justify-content: center;
			align-items: center;
		`}
	>
		{/* TODO: Add button that takes user to subscription */}
		<Card
			title={leagueType === 'NCAA' ? 'What are NCAA Expected Wins?' : 'What are NBA Expected Wins?'}
			bordered
			style={{ margin: 30 }}
		>
			<Title level={4}>
				Through the use of our EPS statistic, we are able to project a NCAA Men’s Basketball team’s win
				percentage which then allows us to project how many wins a team is expected to have. These projections
				are a unique way to understand whether a team has played better or worse than their record indicates.
			</Title>
		</Card>
	</div>
);

export default NCAAExpectedWinsPage;
