import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Divider, Typography } from 'antd';
import { useSelector } from 'react-redux';
import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import PlayerSeasonGradesDesc from '../common/static/PlayerSeasonGradesDesc';
import Footer from '../common/static/Footer';
import Datatable6 from '../dataTables/6/Datatable6';
import ScrollToTop from '../../common/scroll/SrollToTop';

// TODO: Add images to background of text content
export const NCAATeamEPSSPage = () => {
	const [ ncaaTeamEpss, setNcaaTeamEpss ] = useState([]);
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
			{currentUser && <div>{ncaaTeamEpss.length ? <Datatable6 /> : <SmallLoader />}</div>}
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default NCAATeamEPSSPage;
