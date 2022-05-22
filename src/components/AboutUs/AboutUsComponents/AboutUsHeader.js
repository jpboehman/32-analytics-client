import React from 'react';

import { Row, Layout, Descriptions, Typography, Divider } from 'antd';

import { css } from '@emotion/css';

export function AboutUsHeader() {
	const { Title } = Typography;
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<Layout>
			<Content>
				<div className={css`background: #fff;`}>
					<About32Analytics />
					<OurFounding />
					<br />
					<OurMission />
				</div>
			</Content>
		</Layout>
	);
}

const About32Analytics = () => {
	const about32 = 'About 32 Analytics';
	return (
		<div style={{ textAlign: 'center', justifyContent: 'center' }}>
			<h1 className={css`padding: 30px;`}>{about32}</h1>
		</div>
	);
};

// Return header with image as background
const OurFounding = () => {
	const ourFounding = 'OUR FOUNDING';
	const ourFoundingDescription = `32 Analytics was founded by two former managers and one former Graduate Assistant at
								Marquette University Men’s basketball. Having first hand experience of the value
								statistics provide in college basketball, what was once a passion project quickly turned
								into an opportunity to provide the world with the data we have created.`;

	return (
		<div>
			<h1 className={css`margin: 0 30px;`}>{ourFounding}</h1>
			<Divider />
			{/* box-decoration-break: clone; Each box fragment is rendered independently with the specified border, 
            padding and margin wrapping each fragment. The border-radius, border-image and box-shadow, 
            are applied to each fragment independently. */}
			<span
				className={css`
					margin-left: 30px;
					box-decoration-break: clone;
				`}
			>
				{ourFoundingDescription}
			</span>
		</div>
	);
};
const OurMission = () => {
	const ourMission = 'OUR MISSION';
	const ourMissionDescription = `Our mission is simple. We want to provide a new method of evaluating player and team performance.
    Whether you are a team, looking for any edge over your opponents, or you are a fan looking for an edge in a debate with friends.
    Our hope is that you enjoy the analysis beyond the box score as much as we do.`;

	return (
		<div className={css`background-color: black;`}>
			<h1
				className={css`
					margin: 0 30px;
                    color: white;
                    font-family: sans-serif;
				`}
			>
				{ourMission}
			</h1>
			<Divider className={css`background-color: white;`} />
			{/* box-decoration-break: clone; Each box fragment is rendered independently with the specified border, 
            padding and margin wrapping each fragment. The border-radius, border-image and box-shadow, 
            are applied to each fragment independently. */}
			<span
				className={css`
					margin-left: 30px;
					box-decoration-break: clone;
                    color: white;
                    font-family: sans-serif;
                    font-size: 20px;
				`}
			>
				{ourMissionDescription}
			</span>
		</div>
	);
};

export default AboutUsHeader;
