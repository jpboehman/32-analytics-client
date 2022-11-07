import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Card, Divider, Menu, Typography, Row } from 'antd';
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

import { css } from '@emotion/css';

const { Title } = Typography;

export const SiteFooter = () => (
  <div className={css``}>
    {/* TODO: Add button that takes user to subscription */}
    {/* backgroundImage: `url(${require('../src/assets/BackgroundBanner.jpeg')})` */}
    <Row>
      <Divider />
      <Card
        bordered={false}
        style={{
          width: 615,
          backgroundImage: `url(${require('../../../assets/hardwood3chop.jpeg')})`,
        }}
      >
        <h1 style={{ fontSize: '40px' }}>Our statistics and Grades</h1>
        <Menu
          mode='vertical'
          defaultSelectedKeys={['0']}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Menu.Item>
            <Link to='/nba-player-season-grades-eps'>
              <Menu.Item key='nbaPlayer'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  NBA Player Season Grades and EPS
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/nba-team-epss'>
              <Menu.Item key='nbaTeam'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  NBA Team EPSS
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/nba-expected-wins'>
              <Menu.Item key='nbaTeam'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  NBA Expected Wins
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/ncaa-player-season-grades-eps'>
              <Menu.Item key='ncaaaPlayerEps'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  NCAA Player Season Grades and EPS
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/ncaa-team-epss'>
              <Menu.Item key='ncaaaPlayerEps'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  NCAA Team EPSS
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/ncaa-team-expected-wins'>
              <Menu.Item key='ncaaaPlayerEps'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  NCAA Expected Wins
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
        </Menu>
      </Card>
      <Card
        style={{
          width: 615,
          backgroundImage: `url(${require('../../../assets/hardwood3chop.jpeg')})`,
        }}
        bordered={false}
      >
        <h1>Useful Links</h1>
        <Menu
          // theme="dark"
          mode='vertical'
          defaultSelectedKeys={['0']}
          style={
            {
              // justifyContent: 'center',
              // alignItems: 'center'
            }
          }
        >
          <Menu.Item>
            <Link to='/subscribe'>
              <Menu.Item key='subscribe'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  Subscribe
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/'>
              <Menu.Item key='aboutUs'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  About Us
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/contact-us'>
              <Menu.Item key='contactUs'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  Contact Us
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/stats-and-grades'>
              <Menu.Item key='statsAndGrades'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  Stats and grades
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/overview'>
              <Menu.Item key='ourStatsExplained'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  Our Stats Explained
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/profile'>
              <Menu.Item key='ncaaPlayerEps'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  Account
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/terms-and-conditions'>
              <Menu.Item key='termsAndConditions'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  Terms and Conditions
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/privacy-policy'>
              <Menu.Item key='privacyPolicy'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  Privacy Policy
                </span>
              </Menu.Item>
            </Link>
          </Menu.Item>
        </Menu>
      </Card>
      <Card
        style={{
          width: 615,
          backgroundImage: `url(${require('../../../assets/hardwood3chop.jpeg')})`,
        }}
        bordered={false}
      >
        <h1>Contact 32 Analytics</h1>
        <Menu
          mode='vertical'
          defaultSelectedKeys={['0']}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <div
            className={css`
              display: flex;
            `}
          >
            <TwitterOutlined style={{ fontSize: '600%' }} />
            <h1
              className={css`
                margin-top: 20px;
                margin-left: 40px;
                font-size: 20px;
                color: black;
              `}
            >
              32_ANALYTICS
            </h1>
          </div>
          <div
            className={css`
              display: flex;
            `}
          >
            <InstagramOutlined style={{ fontSize: '600%' }} />
            <h1
              className={css`
                margin-top: 20px;
                margin-left: 40px;
                font-size: 20px;
                color: black;
              `}
            >
              32_ANALYTICS
            </h1>
          </div>
          <div
            className={css`
              display: flex;
            `}
          >
            <FacebookOutlined style={{ fontSize: '600%' }} />
            <h1
              className={css`
                margin-top: 20px;
                margin-left: 40px;
                font-size: 20px;
                color: black;
              `}
            >
              32_ANALYTICS
            </h1>
          </div>
        </Menu>
      </Card>
    </Row>
  </div>
);

export default SiteFooter;
