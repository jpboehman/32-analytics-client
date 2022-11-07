import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Card, Divider, Typography } from 'antd';
import { useSelector } from 'react-redux';
import Papa from 'papaparse';
import SmallLoader from '../common/Loaders/SmallLoader';
import SubscribeToday from '../common/static/SubscribeToday';
import Footer from '../common/static/Footer';
import Datatable4 from '../dataTables/4/Datatable4';
import ScrollToTop from '../../common/scroll/SrollToTop';

const { Title } = Typography;

// TODO: Add images to background of text content
export const NCAAExpectedWinsPage = () => {
  const [ncaaExpectedWins, setNcaaExpectedWins] = useState([]);
  const currentUser = useSelector((state) => state.currentUser?.payload);

  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
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
        },
      }
    );
  }, []);

  const fixedHeaderText = 'NCAA Expected Wins';

  const Background = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${require('../../assets/NCAA_EXPECTED_WINS.png')})`,
          height: '60vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginTop: 65,
        }}
      >
        <Typography.Title
          level={1}
          style={{
            marginLeft: 20,
            marginTop: 10,
            marginBotttom: 5,
            color: 'white',
          }}
        >
          {fixedHeaderText}
        </Typography.Title>
        <Typography.Title style={{ color: 'white', marginLeft: 20 }} level={5}>
          --------------------------------------------------------
        </Typography.Title>
      </div>
    );
  };

  return (
    <div className={css``}>
      <Background />
      {!currentUser && <SubscribeToday />}
      <Divider />
      <NCAAExpectedWinsDesc leagueType='NCAA' />
      {currentUser && (
        <div>{ncaaExpectedWins.length ? <Datatable4 /> : <SmallLoader />}</div>
      )}
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
      title={
        leagueType === 'NCAA'
          ? 'What are NCAA Expected Wins?'
          : 'What are NBA Expected Wins?'
      }
      bordered
      style={{ margin: 30 }}
    >
      <Title level={4}>
        Through the use of our EPS statistic, we are able to project a NCAA
        Men’s Basketball team’s win percentage which then allows us to project
        how many wins a team is expected to have. These projections are a unique
        way to understand whether a team has played better or worse than their
        record indicates.
      </Title>
    </Card>
  </div>
);

export default NCAAExpectedWinsPage;
