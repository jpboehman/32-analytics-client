import React from 'react';

import { Typography, Divider } from 'antd';

import { css } from '@emotion/css';

// TODO: Add images to background of text content
export const OurStatsExplainedBody = () => {
  const ourStatsExplainedBodyTitle = 'Player Season Grade';
  const ourStatsExplainedBodyQuestion = 'What are Player Season Grades?';
  const ourStatsExplainedBodyDescription = `The Player Season Grade statistic grades a player’s season on a scale of 0-100.
    The grade is calculated through the use of traditional box score stats, advanced stats, and our very own EPS statistic.
    The main purpose of Player Season Grades is to take all the statistics that go into evaluating a player’s performance and simplify it down to one number.
    This offers an alternative way of evaluating player performance.
	Please keep in mind that the statistic doesn’t attempt to rate players but strictly grade their season.`;
  const howAccurate = `How accurate are Player Season Grades?`;
  const howAccurateArePlayerSeasonGrades = `In 9 of the past 10 seasons, the NBA MVP has finished within the top 2 of Player Season Grades for that season.
	In 7 of the past 10 seasons, the NBA Rookie of the Year had the highest Player Season Grade amongst rookies for their respective seasons.
	In 7 of the past 10 seasons, the AP Player of the Year has finished within the top 3 of Player Season Grades for that season.`;

  return (
    <div className={css``}>
      <Typography.Title level={1} style={{ margin: 30, fontSize: 30 }}>
        {ourStatsExplainedBodyTitle}
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
        {ourStatsExplainedBodyQuestion}
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
        {ourStatsExplainedBodyDescription}
        <br />
        <Typography.Title
          level={5}
          style={{
            marginLeft: 30,
            marginTop: 15,
            fontWeight: 500,
            textDecoration: 'underline',
            textDecorationColor: 'none',
          }}
        >
          {howAccurate}
        </Typography.Title>
        <Divider />
        {howAccurateArePlayerSeasonGrades}
      </span>
      <Divider />
    </div>
  );
};

export default OurStatsExplainedBody;
