import React from 'react';

import { css } from '@emotion/css';

// TODO: Add images to background of text content
export const OurStatsExplainedHeader = () => {
  const ourStatsExplainedHeaderText = 'Our Stats Explained';
  return (
    <div style={{ textAlign: 'center', justifyContent: 'center' }}>
      <img
        src={require('../../assets/32AnalyticsLogoFULL.png')}
        style={{ maxWidth: 400 }}
      />
      <h1
        className={css`
          font-size: 80px;
          @media only screen and (max-width: 900px) {
            font-size: 45px;
            padding: 10px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 35px;
            padding: 5px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 20px;
            padding: 5px;
          }
        `}
      >
        {ourStatsExplainedHeaderText}
      </h1>
    </div>
  );
};

export default OurStatsExplainedHeader;
