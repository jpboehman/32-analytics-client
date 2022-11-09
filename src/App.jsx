import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Layout } from 'antd';
import './App.css';

import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/AboutUs/Home';
import Profile from './components/Profile';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/BoardAdmin';
import OurStatsExplained from './components/OurStatsExplained';
import StatsAndGrades from './components/StatsAndGrades';
import Subscribe from './components/subscribe/Subscribe';
import NBAPlayerSeasonGradesAndEPSPage from './components/NBAPlayerSeasonGradesAndEPS/NBAPlayerSeasonGradesAndEPSPage';
import NBATeamEPSSPage from './components/NBATeamEPSS/NBATeamEPSSPage';
import { Menu, Typography } from 'antd';

import EventBus from './common/EventBus';
import { css } from '@emotion/css';
import NCAAPlayerSeasonGradesAndEPSPage from './components/NCAAPlayerSeasonGradesAndEPS/NCAAPlayerSeasonGradesAndEPSPage';
import NCAATeamEPSSPage from './components/NCAATeamEPSS/NCAATeamEPSSPage';
import NCAAExpectedWinsPage from './components/NCAAExpectedWins/NCAAExpectedWins';
import NBAExpectedWinsPage from './components/NBAExpectedWins/NBAExpectedWinsPage';

import { logout } from './redux/userRedux';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {
  const { Header, Content } = Layout;
  const currentUser = useSelector((state) => state.currentUser?.payload);
  const [confirmCurrentUser, setConfirmCurrentUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setConfirmCurrentUser(true);
    }

    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, []);

  // TODO: Make another effect for when the selected index is changed via a link in another component to make sure navbar reflects correctly

  const logOut = () => {
    dispatch(logout());
    setConfirmCurrentUser(false);
  };

  return (
    <div>
      <Layout>
        <Header
          style={{
            backgroundImage: `url(${require('../src/assets/hardwood3chop.jpeg')})`,
            position: 'fixed',
            zIndex: 9999,
            width: '100%',
          }}
        >
          <div
            className={css`
              float: center;
              width: 100%;
            `}
          />
          <Menu
            theme='light'
            mode='horizontal'
            defaultSelectedKeys={['0']}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: `url(${require('../src/assets/hardwood3chop.jpeg')})`,
            }}
          >
            <Menu.Item>
              <NavLink to='/'>
                <Typography.Title
                  className={css`
                    color: black;
                  `}
                  level={4}
                >
                  32Analytics
                </Typography.Title>
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to='/overview'>
                <Typography.Title
                  className={css`
                    color: black;
                  `}
                  level={4}
                >
                  Our Stats Explained
                </Typography.Title>
              </NavLink>
            </Menu.Item>
            <Menu.SubMenu
              title={
                <Typography.Title
                  className={css`
                    color: black;
                  `}
                  level={4}
                >
                  Statistics & Grades
                </Typography.Title>
              }
              style={{ color: 'black', fontSize: 20 }}
            >
              <div
                className={css`
                  margin-left: 10px;
                  margin-top: 50px;
                `}
              >
                <span>NBA Statistics And Grades</span>
                <Menu.ItemGroup
                  key='NBA'
                  className={css`
                    color: purple;
                  `}
                >
                  <NavLink to='/nba-player-season-grades-eps'>
                    <Menu.Item key='nbaPlayer'>
                      NBA Player Season Grades and EPS
                    </Menu.Item>
                  </NavLink>
                  <NavLink to='/nba-team-epss'>
                    <Menu.Item key='nbaTeam'>NBA Team EPSS</Menu.Item>
                  </NavLink>
                  <NavLink to='/nba-expected-wins'>
                    <Menu.Item key='nbaExpectedWins'>
                      NBA Expected Wins
                    </Menu.Item>
                  </NavLink>
                </Menu.ItemGroup>
                <span className={css`padding-top: 15px;`}>NCAA Statistics And Grades</span>
                <Menu.ItemGroup key='NCAA'>
                  <NavLink to='/ncaa-player-season-grades-eps'>
                    <Menu.Item key='ncaaPlayer'>
                      NCAA Player Season Grades and EPS
                    </Menu.Item>
                  </NavLink>
                  <NavLink to='/ncaa-team-epss'>
                    <Menu.Item key='ncaaTeam'>NCAA Team EPSS</Menu.Item>
                  </NavLink>
                  <NavLink to='ncaa-expected-wins'>
                    <Menu.Item key='ncaaExpectedWins'>
                      NCAA Expected Wins
                    </Menu.Item>
                  </NavLink>
                </Menu.ItemGroup>
              </div>
              <Menu.Item key='NCAA' />
            </Menu.SubMenu>
            <Menu.Item>
              <NavLink to='/contact-us'>
                <span
                  className={css`
                    color: black;
                  `}
                >
                  <Typography.Title
                    className={css`
                      color: black;
                    `}
                    level={4}
                  >
                    Contact Us
                  </Typography.Title>
                </span>
              </NavLink>
            </Menu.Item>
            {!confirmCurrentUser && (
              <Menu.Item>
                <NavLink to='/login'>
                  <Typography.Title
                    className={css`
                      color: black;
                    `}
                    level={4}
                  >
                    Login
                  </Typography.Title>
                </NavLink>
              </Menu.Item>
            )}
            {!confirmCurrentUser && (
              <Menu.Item>
                <NavLink to='/register'>
                  <Typography.Title
                    className={css`
                      color: black;
                    `}
                    level={4}
                  >
                    Register
                  </Typography.Title>
                </NavLink>
              </Menu.Item>
            )}
            {confirmCurrentUser && (
              <Menu.Item>
                <Button
                  onClick={logOut}
                  className={css`
                    border-radius: 10px;
                    background-color: brown;
                    color: white;
                    :hover {
                      cursor: pointer;
                    }
                  `}
                >
                  Logout
                </Button>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        <Content />
      </Layout>
      <div>
        {/* TODO: Determine what routes to keep and what to refactor */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/subscribe' element={<Subscribe />} />
          <Route path='/home' element={<Home />} />
          {/* // Ensure that the login page is the inital landing page */}
          <Route
            path='/login'
            element={currentUser ? <Navigate exact to='/profile' /> : <Login />}
          />
          <Route
            path='/register'
            element={
              currentUser ? <Navigate exact to='/profile' /> : <Register />
            }
          />

          <Route path='/stats-and-grades' element={<StatsAndGrades />} />
          <Route
            path='/nba-player-season-grades-eps'
            element={<NBAPlayerSeasonGradesAndEPSPage />}
          />
          <Route path='/nba-team-epss' element={<NBATeamEPSSPage />} />
          <Route path='/nba-expected-wins' element={<NBAExpectedWinsPage />} />
          <Route
            path='/ncaa-player-season-grades-eps'
            element={<NCAAPlayerSeasonGradesAndEPSPage />}
          />
          <Route path='/ncaa-team-epss' element={<NCAATeamEPSSPage />} />
          <Route
            path='/ncaa-expected-wins'
            element={<NCAAExpectedWinsPage />}
          />
          <Route path='/overview' element={<OurStatsExplained />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/user' element={<BoardUser />} />
            <Route path='/mod' element={<BoardModerator />} />
            <Route path='/admin' element={<BoardAdmin />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
