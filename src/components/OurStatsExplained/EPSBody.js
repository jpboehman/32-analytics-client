import React from 'react';

import { Typography, Divider } from 'antd';

import { css } from '@emotion/css';

// TODO: Add images to background of text content
export const EPSBody = () => {
  const epsBodyTitle = 'Efficent Production Score';
  const epsBodyQuestion = 'What is EPS?';
  const epsBodyDescription = `EPS attempts to measure a player’s performance by applying linear weights to traditional box score statistics.
    The EPS statistic is our way of understanding how efficiently a player contributes to their team.
    EPS can also be applied to team statistics which helps with understanding team performance.`;

  const epsAccurateHeader = `How accurate is EPS?`;
  const epsAccurateBody = `EPS accurately identifies which players are providing quality performances to their teams:
        Nikola Jokić, the 2020-2021 NBA MVP, led the league in EPS last season.
        Luka Garza, the 2020-2021 AP National Player of the Year, led the country in EPS last season.
        Teams should strive to have players that provide a high EPS every game.
        In the 2020-2021 NBA Regular Season, teams that had a higher EPS than their opponent won the game 94% of the time.
        This means if you have a higher EPS than your opponent during a game, you also have a higher chance of winning the game.`;

  const epssSectionHeader = `EFFICIENT PRODUCTION SCORE SPREAD (EPSS)`;
  const epssBodySectionHeader = `What is EPSS?`;
  const epssBodySectionBody = `EPSS is the difference or spread between a team’s EPS and their opponent’s EPS.
        The EPSS stat is our way to measure team performance.
        Historically, a team’s EPSS and win percentage are strongly correlated. 
        EPSS = (Team EPS – Opponent EPS)`;

  const howAccurateIsEPSHeader = `How accurate is EPSS?`;
  const howAccurateIsEPSBody = `For the NBA, there is a strong, positive correlation (0.93) between EPSS and win percentage. 
        For the NCAA, there is a strong, positive correlation (0.89) between EPSS and win percentage.
        As shown in the graph below and through our understanding of the correlation in both the NBA and NCAA,
        EPSS and win percentage are both strongly related.
        The higher the EPSS, the higher the win percentage. The lower the EPSS, the lower the win percentage.`;

  const expectedWinsSectionHeader = `EXPECTED WINS`;
  const expectedWinsBodySectionHeader = `What are Expected Wins?`;
  const whatAreExpectedWinsBodySectionBody = `Through the use of our EPS statistic,
        we are able to project a team’s win percentage which then allows us to project how many wins a team is expected to have.
        These projections are a unique way to understand whether a team has played better or worse than their record indicates.`;

  const howAccurateIsExpectedWins = `How accurate is Expected Wins?`;
  const howAccurateIsEPSExpectedWinsBody = `For the NBA, there is a 95% average accuracy across the league by the end of the season. 
        An example of this accuracy from last season:
        The Milwaukee Bucks owned a record of 46-26 (0.638) at the end of the season. 
        Our Expected Wins Through Games Played model expected Milwaukee to have a (0.639) win percentage that equates to an expected record of 46-26. 
        For the NCAA, there is a 93% average accuracy across the country by the end of the season
        An example of this accuracy from last season:
        The Michigan Wolverines ended their season with a record of 23-5 (0.821).
        Our Expected Wins Through Games Played model expected Michigan to have a (0.806) win percentage that equates to an expected record of 23-5.`;

  return (
    <div className={css``}>
      <Typography.Title level={1} style={{ margin: 30, fontSize: 30 }}>
        {epsBodyTitle}
      </Typography.Title>
      <Typography.Title
        level={5}
        style={{
          marginLeft: 30,
          fontWeight: 500,
          textDecoration: 'underline',
          textDecorationColor: 'none',
        }}
      >
        {epsBodyQuestion}
      </Typography.Title>
      <Divider />

      <span
        className={css`
          margin-left: 30px;
          box-decoration-break: clone;
          font-size: 20px;
          @media only screen and (max-width: 900px) {
            font-size: 18px;
            margin-left: 10px;
            margin-right: 10px;
            padding: 5px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 16px;
            margin-left: 7px;
            margin-right: 7px;
            padding: 3px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 13px;
            margin-left: 5px;
            margin-right: 5px;
            padding: 2px;
          }
        `}
      >
        {epsBodyDescription}
      </span>
      <Divider />
      <Typography.Title
        level={5}
        style={{
          marginLeft: 30,
          fontWeight: 500,
          textDecoration: 'underline',
          textDecorationColor: 'none',
        }}
      >
        {epsAccurateHeader}
      </Typography.Title>
      <Divider />
      <span
        className={css`
          margin-left: 30px;
          box-decoration-break: clone;
          font-size: 20px;
          @media only screen and (max-width: 900px) {
            font-size: 18px;
            margin-left: 10px;
            margin-right: 10px;
            padding: 5px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 16px;
            margin-left: 7px;
            margin-right: 7px;
            padding: 3px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 13px;
            margin-left: 5px;
            margin-right: 5px;
            padding: 2px;
          }
        `}
      >
        {epsAccurateBody}
      </span>
      <Divider />
      <Typography.Title level={1} style={{ margin: 30, fontSize: 30 }}>
        {epssSectionHeader}
      </Typography.Title>
      <Typography.Title
        level={5}
        style={{
          marginLeft: 30,
          fontWeight: 500,
          textDecoration: 'underline',
          textDecorationColor: 'none',
        }}
      >
        {epssBodySectionHeader}
      </Typography.Title>
      <Divider />
      <span
        className={css`
          margin-left: 30px;
          box-decoration-break: clone;
          font-size: 20px;
          @media only screen and (max-width: 900px) {
            font-size: 18px;
            margin-left: 10px;
            margin-right: 10px;
            padding: 5px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 16px;
            margin-left: 7px;
            margin-right: 7px;
            padding: 3px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 13px;
            margin-left: 5px;
            margin-right: 5px;
            padding: 2px;
          }
        `}
      >
        {epssBodySectionBody}
      </span>
      <Divider />
      <Typography.Title
        level={5}
        style={{
          marginLeft: 30,
          fontWeight: 500,
          textDecoration: 'underline',
          textDecorationColor: 'none',
        }}
      >
        {howAccurateIsEPSHeader}
      </Typography.Title>
      <Divider />
      <span
        className={css`
          margin-left: 30px;
          box-decoration-break: clone;
          font-size: 20px;
          @media only screen and (max-width: 900px) {
            font-size: 18px;
            margin-left: 10px;
            margin-right: 10px;
            padding: 5px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 16px;
            margin-left: 7px;
            margin-right: 7px;
            padding: 3px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 13px;
            margin-left: 5px;
            margin-right: 5px;
            padding: 2px;
          }
        `}
      >
        {howAccurateIsEPSBody}
      </span>
      <Divider />
      <Typography.Title level={1} style={{ margin: 30, fontSize: 30 }}>
        {expectedWinsSectionHeader}
      </Typography.Title>
      <Typography.Title
        level={5}
        style={{
          marginLeft: 30,
          fontWeight: 500,
          textDecoration: 'underline',
          textDecorationColor: 'none',
        }}
      >
        {expectedWinsBodySectionHeader}
      </Typography.Title>
      <Divider />
      <span
        className={css`
          margin-left: 30px;
          box-decoration-break: clone;
          font-size: 20px;
          @media only screen and (max-width: 900px) {
            font-size: 18px;
            margin-left: 10px;
            margin-right: 10px;
            padding: 5px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 16px;
            margin-left: 7px;
            margin-right: 7px;
            padding: 3px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 13px;
            margin-left: 5px;
            margin-right: 5px;
            padding: 2px;
          }
        `}
      >
        {whatAreExpectedWinsBodySectionBody}
      </span>
      <Divider />
      <Typography.Title
        level={5}
        style={{
          marginLeft: 30,
          fontWeight: 500,
          textDecoration: 'underline',
          textDecorationColor: 'none',
        }}
      >
        {howAccurateIsExpectedWins}
      </Typography.Title>
      <Divider />
      <span
        className={css`
          margin-left: 30px;
          margin-bottom: 10px;
          box-decoration-break: clone;
          font-size: 20px;
          @media only screen and (max-width: 900px) {
            font-size: 18px;
            margin-left: 10px;
            margin-right: 10px;
            padding: 5px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 16px;
            margin-left: 7px;
            margin-right: 7px;
            padding: 3px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 13px;
            margin-left: 5px;
            margin-right: 5px;
            padding: 2px;
          }
        `}
      >
        {howAccurateIsEPSExpectedWinsBody}
      </span>
    </div>
  );
};

export default EPSBody;
