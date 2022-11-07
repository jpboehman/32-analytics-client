import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Layout, Divider, Typography } from 'antd';
import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import PlayerSeasonGradesDesc from '../common/static/PlayerSeasonGradesDesc';
import Footer from '../common/static/Footer';
import { useSelector } from 'react-redux';
import Datatable2 from '../dataTables/2/Datatable2';
import ScrollToTop from '../../common/scroll/SrollToTop';

// TODO: Add images to background of text content
export const NBAPlayerSeasonGradesAndEPSPage = () => {
  const [nbaPlayerRatings, setNBAPlayerRatings] = useState([]);
  const currentUser = useSelector((state) => state.currentUser?.payload);
  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsWOjSYH9x30FEv-z4Pom-P6cvzkphmdHOpD1eFarNJi0XmkmPb5fzCEyAMX8xs9ttaFpRsWVYTPHx/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          if (results.data.length > 100) {
            setNBAPlayerRatings(results.data.slice(0, 100));
          } else {
            setNBAPlayerRatings(results.data);
          }
        },
      }
    );
  }, []);

  const fixedHeaderText = 'NBA Player Season Grades & EPS';

  const Background = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${require('../../assets/NBA_PLAYER_GRADES_EPS.png')})`,
          height: '60vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginTop: -80,
        }}
      >
        <Typography.Title level={1} style={{ color: 'white', marginLeft: 20 }}>
          {fixedHeaderText}
        </Typography.Title>
        <Typography.Title style={{ color: 'white', marginLeft: 20 }} level={5}>
          --------------------------------------------------------
        </Typography.Title>
      </div>
    );
  };

  return (
    <div
      className={css`
        padding: 10px;
      `}
    >
      <Typography.Title level={1} style={{ margin: 30 }}>
        {fixedHeaderText}
      </Typography.Title>
      <Divider />
      {!currentUser && <SubscribeToday />}
      <Background />
      <PlayerSeasonGradesDesc />
      {currentUser && (
        <div>{nbaPlayerRatings.length ? <Datatable2 /> : <SmallLoader />}</div>
      )}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default NBAPlayerSeasonGradesAndEPSPage;
