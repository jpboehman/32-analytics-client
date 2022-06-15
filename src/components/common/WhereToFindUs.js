import React, { useState, useEffect } from 'react';

import { Descriptions, Divider, Typography } from 'antd';

import { css } from '@emotion/css';

import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

export const WhereToFindUs = () => {
	return (
		<div className={css`margin: 30px;`}>
			<Typography.Title level={1}>Where To Find Us:</Typography.Title>
			<Divider />
			<div className={css`display: flex;`}>
				<TwitterOutlined style={{ fontSize: '800%' }} />
				<h1 className={css`margin-top: 20px; margin-left: 40px; font-size: 30px;`}>32_ANALYTICS</h1>
			</div>
			<div className={css`display: flex;`}>
				<InstagramOutlined style={{ fontSize: '800%' }} />
				<h1 className={css`margin-top: 20px; margin-left: 40px; font-size: 30px;`}>32_ANALYTICS</h1>
			</div>
			<div className={css`display: flex;`}>
				<FacebookOutlined style={{ fontSize: '800%' }} />
				<h1 className={css`margin-top: 20px; margin-left: 40px; font-size: 30px;`}>32_ANALYTICS</h1>
			</div>
		</div>
	);
};
