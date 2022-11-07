import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Divider, Typography } from 'antd';
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
	const [ ncaaPlayerRatings, setNCAAPlayerRatings ] = useState([]);
	const currentUser = useSelector((state) => state.currentUser.payload);
	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
		Papa.parse(
			'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?output=csv',
			{
				download: true,
				header: true,
				complete: (results) => {
					if (results.data.length > 100) {
						setNCAAPlayerRatings(results.data.slice(0, 100));
					} else {
						setNCAAPlayerRatings(results.data);
					}
				}
			}
		);
	}, []);

	const fixedHeaderText = 'NCAA Player Season Grades & EPS';

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

	return (
		<div className={css`padding: 10px;`}>
			<Background />
			{!currentUser && <SubscribeToday />}
			<Divider />
			<PlayerSeasonGradesDesc leagueType="NCAA" />
			{currentUser && <div>{ncaaPlayerRatings.length ? <Datatable5 /> : <SmallLoader />}</div>}
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default NCAAPlayerSeasonGradesAndEPSPage;
