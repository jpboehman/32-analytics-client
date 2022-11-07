import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

import { Layout, Divider, Typography } from 'antd';

import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import Footer from '../common/static/Footer';
import SubscribeToday from '../common/static/SubscribeToday';
import { useSelector } from 'react-redux';
import ScrollToTop from '../../common/scroll/SrollToTop';
import Datatable3 from '../dataTables/3/Datatable3';

// TODO: Add images to background of text content
export const NBATeamEPSSPage = () => {
	const [ nbaTeamEPSS, setNBATeamEPSS ] = useState([]);
	const { Content } = Layout;
	const currentUser = useSelector((state) => state.currentUser.payload || null);
	useEffect(() => {
		// Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
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
			{currentUser && <div>{nbaTeamEPSS.length ? <Datatable3 /> : <SmallLoader />}</div>}
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default NBATeamEPSSPage;
