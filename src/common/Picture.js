import React from 'react';
import { css } from '@emotion/css';
import { Button, Layout, Image, Typography, Divider, Row, Col, Card } from 'antd';
const { Text, Link, Title } = Typography;

export const Picture = () => (
	<div
		className={css`
			margin: 3%;
			position: relative;
		`}
	>
		{/* <Image src={require('../../../assets/StephCurrey.jpeg')} /> */}
		<Image src={require('../assets/StephCurrey.jpeg')} width={1500} />

		<h1
			className={css`
				position: absolute;
				top: 400px;
				left: 400px;
				color: white;
			`}
		>
			Analysis Beyond The Box Score
		</h1>
		<Divider style={{ borderWidth: 2, borderColor: '#7cb305' }} />

		<Title
			level={3}
			className={css`
				position: absolute;
				bottom: 20px;
				left: 10px;
			`}
		>
			A computer science portal
		</Title>
	</div>
);

export default Picture;
