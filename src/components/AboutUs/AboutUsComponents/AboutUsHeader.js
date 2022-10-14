import React from 'react';

import { Button, Layout, Image, Typography, Divider, Row, Col, Card } from 'antd';

import { css } from '@emotion/css';

export function AboutUsHeader() {
	const { Content } = Layout;

	// TODO: Update this component to be Analysis Beyond the Box Score
	return (
		<Layout>
			<Content>
				<Image display="flex" src={require('../../../assets/StephCurrey.jpeg')} />
				<div>
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
			<h1
				className={css`
					padding: 30px;
					font-size: 100px;
				`}
			>
				{about32}
			</h1>
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
		<div
			className={css`
				margin-left: 250px;
				margin-right: 200px;
			`}
		>
			<Typography.Title level={1} style={{ margin: 30 }}>
				{ourFounding}
			</Typography.Title>
			<Divider />
			{/* box-decoration-break: clone; Each box fragment is rendered independently with the specified border, 
            padding and margin wrapping each fragment. The border-radius, border-image and box-shadow, 
            are applied to each fragment independently. */}
			<span
				className={css`
					margin-left: 30px;
					box-decoration-break: clone;
					font-size: 20px;
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
		<div
			className={css`
				margin-top: 30px;
				margin-left: 250px;
				margin-right: 200px;
			`}
		>
			<h1
				className={css`
					margin: 0 30px;
					font-family: sans-serif;
				`}
			>
				{ourMission}
			</h1>
			<Divider />

			<span
				className={css`
					margin-left: 30px;
					box-decoration-break: clone;
					font-family: sans-serif;
					font-size: 20px;
				`}
			>
				{ourMissionDescription}
			</span>
			<div>
				<Row>
					<Card title="Player Season Grades" style={{ width: 250 }}>
						<img
							src={require('../../../assets/NBA_Giannis.jpeg')}
							style={{ maxWidth: 200, marginRight: 10 }}
						/>
						<Divider />
						<Typography.Text>
							The Player Season Grade statistic grades a player’s season on a scale of 0-100 through the
							use of traditional and advanced statistics.
						</Typography.Text>
						<br />
						<br />
						<Button className={css`margin: 10px;`}>NCAA</Button>
						<Button classname={css`margin: 10px;`}>NBA</Button>
					</Card>

					<Card title="Efficient Production Score" style={{ width: 250 }}>
						<img
							src={require('../../../assets/NCAA_Indiana.jpeg')}
							style={{ maxWidth: 200, marginRight: 10 }}
						/>
						<Divider />
						<Typography.Text>
							Efficient Production Score attempts to measure a player’s performance by applying linear
							weights to traditional box score statistics.
						</Typography.Text>
						<br />
						<br />
						<Button className={css`margin: 10px;`}>NCAA</Button>
						<Button classname={css`margin: 10px;`}>NBA</Button>
					</Card>
					<Card title="Efficient Production Score Spread" style={{ width: 350 }}>
						<img
							src={require('../../../assets/NBA_Brooklyn.jpeg')}
							style={{ maxWidth: 280, marginRight: 10 }}
						/>
						<Divider />
						<Typography.Text>
							EPSS is used to measure team performance by finding the difference/spread between a team’s
							EPS and their opponent’s EPS.
						</Typography.Text>
						<br />
						<br />
						<Button className={css`margin: 10px;`}>NCAA</Button>
						<Button classname={css`margin: 10px;`}>NBA</Button>
					</Card>
					<Card title="Expected Wins" style={{ width: 250 }}>
						<img
							src={require('../../../assets/NCAA_UCLA.jpeg')}
							style={{ maxWidth: 200, marginRight: 10 }}
						/>
						<Divider />
						<Typography.Text>
							Expected Wins offers an expected win total through games played and expected win percentage
							for each team based on our EPS statistic.
						</Typography.Text>
						<br />
						<br />

						<Button className={css`margin: 10px;`}>NCAA</Button>
						<Button classname={css`margin: 10px;`}>NBA</Button>
					</Card>
				</Row>

				{/* New col starting here */}
				<Row>
					<Col>
						<Card title="Stat Accuracy" style={{ width: 250 }}>
							<Typography.Text strong>NBA</Typography.Text>
							<br />
							<Typography.Text>
								In 9 of the past 10 seasons, the NBA MVP has finished within the top 2 of Player Grades
								for that season
							</Typography.Text>
							<br />
							<br />
							<Typography.Text strong>NCAA</Typography.Text>
							<br />
							<Typography.Text>
								In 7 of the past 10 seasons, the AP Player of the Year has finished in the top 3 of
								Player Grades for that season
							</Typography.Text>
						</Card>
					</Col>

					<Card title="Stat Accuracy" style={{ width: 250 }}>
						<Typography.Text strong>NBA</Typography.Text>
						<br />
						<Typography.Text>
							Nikola Jokić, the 2020-2021 NBA MVP, led the league in EPS last season
						</Typography.Text>
						<br />
						<br />
						<Typography.Text strong>NCAA</Typography.Text>
						<br />
						<Typography.Text>
							Luka Garza, the 2020-2021 AP National Player of the Year, led the country in EPS last season
						</Typography.Text>
					</Card>
					<Card title="Stat Accuracy" style={{ width: 350 }}>
						<Typography.Text strong>NBA</Typography.Text>
						<br />
						<Typography.Text>
							EPSS is strongly correlated (0.93) with winning percentage in the NBA
						</Typography.Text>
						<br />
						<br />
						<Typography.Text strong>NCAA</Typography.Text>
						<br />
						<Typography.Text>
							EPSS is strongly correlated (0.89) with winning percentage in the NCAA
						</Typography.Text>
					</Card>
					<Card title="Stat Accuracy" style={{ width: 250 }}>
						<Typography.Text strong>NBA</Typography.Text>
						<br />
						<Typography.Text>
							Average accuracy of 95% across the NBA by the end of the season
						</Typography.Text>
						<br />
						<br />
						<Typography.Text strong>NCAA</Typography.Text>
						<br />
						<Typography.Text>
							Average accuracy of 93% across the NCAA by the end of the season
						</Typography.Text>
					</Card>
				</Row>
			</div>
		</div>
	);
};

export default AboutUsHeader;
