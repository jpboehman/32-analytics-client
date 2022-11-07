import React from 'react';
import { css } from '@emotion/css';
import { Image, Divider } from 'antd';

export const Picture = () => (
  <div
    className={css`
      position: relative;
    `}
  >
    {/* <Image src={require('../../../assets/StephCurrey.jpeg')} /> */}
    <Image
      src={require('../assets/StephCurrey.jpeg')}
      style={{ width: '100vw', height: '40vh', objectFit: 'cover' }}
    />

    <h1
      className={css`
        position: absolute;
        top: 100px;
        left: 400px;
        color: white;
        padding: 20px;
        font-size: 40px;
        @media only screen and (max-width: 900px) {
          font-size: 20px;
          padding: 5px;
        }
        @media only screen and (max-width: 600px) {
          font-size: 18px;
          padding: 3px;
        }
        @media only screen and (max-width: 480px) {
          font-size: 13px;
          padding: 2px;
        }
      `}
    >
      Analysis Beyond The Box Score
    </h1>
    <Divider style={{ borderWidth: 2, borderColor: 'khaki' }} />
  </div>
);

export default Picture;
