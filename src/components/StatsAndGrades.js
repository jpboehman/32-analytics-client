import React, { useEffect, useState } from 'react';

import { StatsAndGradesHeader } from './StatsAndGrades/StatsAndGradesHeader';
import { StatsAndGradesBody } from './StatsAndGrades/StatsAndGradesBody';

import { Row, Col, Layout } from 'antd';

import { css } from '@emotion/css';

import Papa from 'papaparse';
import Footer from './common/static/Footer';
// import useApi from '../hooks/useApi';

// TODO: Fix this component
export function StatsAndGrades() {
  const [content, setContent] = useState([]);
  // const { isLoading, data } = useApi(`https://jsonplaceholder.typicode.com/users`); // Testing out this custom hook
  const { Content } = Layout;

  // Attempting to fetch data from spreadsheet
  // Starting with 'NBA Player Grades & EPS'
  useEffect(() => {
    // Correctly fetches data from NBA Player Season Grades spreadsheet. Work on limiting the items returned
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRsWOjSYH9x30FEv-z4Pom-P6cvzkphmdHOpD1eFarNJi0XmkmPb5fzCEyAMX8xs9ttaFpRsWVYTPHx/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          if (results.data.length > 100) {
            setContent(results.data.slice(0, 100));
          } else {
            setContent(results.data);
          }
        },
      }
    );
  }, []);

  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <Layout>
        <Content style={{ padding: '0 25px' }}>
          <div
            className={css`
              min-height: 80vh;
              min-width: 50vh;
            `}
          >
            <StatsAndGradesHeader />
            <StatsAndGradesBody />
          </div>
        </Content>
        <Footer />
      </Layout>
      <Row>
        <Col span={1500} />
      </Row>
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default StatsAndGrades;
