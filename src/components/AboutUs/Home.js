import React from 'react';

// import UserService from '../../services/user.service';

import AboutUsHeader from './AboutUsComponents/AboutUsHeader';
import Footer from '../common/static/Footer';

import { Row, Col, Divider, Layout } from 'antd';

import { css } from '@emotion/css';
import ScrollToTop from '../../common/scroll/SrollToTop';

export const Home = () => {
  const { Content } = Layout;

  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <Layout>
        <Content style={{ padding: '5px 20px', margin: '0px' }}>
          <div
            className={css`
              min-height: 60vh;
              min-width: 50vw;
              text-align: center;
            `}
          >
            <img
              src={require('../../assets/32AnalyticsLogoFULL.png')}
              alt=''
              style={{ maxWidth: 400 }}
            />
            <AboutUsHeader />
            <Divider />
          </div>
        </Content>
        <ScrollToTop />
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
};

export default Home;
