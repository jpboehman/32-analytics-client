import React from 'react';

import { Row, Col, PageHeader, Layout } from 'antd';

import { css } from '@emotion/css';

export function StatsAndGrades() {
	// const [ content, setContent ] = useState('');
	const { Footer, Content } = Layout;

	// TODO: Replace with api call to fetch spreadsheet data
	// useEffect(() => {
	// 	UserService.getPublicContent().then(
	// 		(response) => {
	// 			setContent(response.data);
	// 		},
	// 		(error) => {
	// 			const _content = (error.response && error.response.data) || error.message || error.toString();

	// 			setContent(_content);
	// 		}
	// 	);
	// }, []);

	// Start building in NavBar here
	return (
		<div className={css`width: 100%;`}>
			<Layout>
				<Content style={{ padding: '0 50px' }}>
					<PageHeader title="Make this a dropdown" subTitle="Dropdown drawer coming!" />
					<div
						className={css`
							min-height: 80vh;
							min-width: 50vh;
							background: #fff;
						`}
					>
						Content
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
