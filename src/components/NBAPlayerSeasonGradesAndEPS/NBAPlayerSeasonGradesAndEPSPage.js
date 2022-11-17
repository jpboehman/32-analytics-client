import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Button, Card, Divider, Menu, Typography } from 'antd';
import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import PlayerSeasonGradesDesc from '../common/static/PlayerSeasonGradesDesc';
import Footer from '../common/static/Footer';
import { useSelector } from 'react-redux';
import Datatable2 from '../dataTables/2/Datatable2';
import chosenYear from '../common/static/statisticalSeasons';
import ScrollToTop from '../../common/scroll/SrollToTop';

// TODO: Add images to background of text content
export const NBAPlayerSeasonGradesAndEPSPage = () => {
  const [nbaPlayerRatings, setNBAPlayerRatings] = useState([]);
  const [selectedYear, setSelectedYear] = useState(chosenYear[20222023])
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
          backgroundImage: `url(${require('../../assets/NBAPlayerSeasonGrades.jpeg')})`,
          height: '80vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Divider />
      </div>
    );
  };

  return (
    <div
      className={css`
        padding: 10px;
      `}
    >
      
      <Divider />
      {!currentUser && <SubscribeToday />}
      <Background />
      <PlayerSeasonGradesDesc />
      {currentUser && (
        <SeasonSelector />
      )}
      {currentUser && (
        <div>{nbaPlayerRatings.length ? <Datatable2 selectedSeason={selectedYear} /> : <SmallLoader />}</div>
      )}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default NBAPlayerSeasonGradesAndEPSPage;
