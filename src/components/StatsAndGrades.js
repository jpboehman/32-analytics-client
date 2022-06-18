import React, { useEffect, useState } from 'react';

import Tabletop from "tabletop";

import OurStatsExplained from './OurStatsExplained/OurStatsExplainedBody';

import { Row, Col, PageHeader, Layout } from 'antd';

import { css } from '@emotion/css';

// TODO: Fix this component
export function StatsAndGrades() {
	const [ content, setContent ] = useState([]);
	const { Footer, Content } = Layout;

	// Attempting to fetch data from spreadsheet
	// Starting with 'NBA Player Grades & EPS'
	useEffect(() => {
    Tabletop.init({
      key: "1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4",
      simpleSheet: true
    })
      .then((content) => setContent(content))
      .catch((err) => console.warn(err));
  }, []);

  console.log(content)

	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content style={{ padding: '0 25px' }}>
					<PageHeader title="About Us" subTitle="About 32Analytics" />
					<div
						className={css`
							min-height: 80vh;
							min-width: 50vh;
							background: #fff;
						`}
					>
						<OurStatsExplained />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>ThirtyTwo Analytics ©2020</Footer>
			</Layout>
			<Row>
				<Col span={1500} />
			</Row>
			<Row />
			<Row />
			<Row />
		</div>
	);
}

export default StatsAndGrades;
