import React from 'react';
import AuthService from '../services/auth.service';
import { Typography, Descriptions, PageHeader } from 'antd';
import { css } from '@emotion/css';

// This is the current entry point for the applicaiton - start editing here!
const Profile = () => {
	const currentUser = AuthService.getCurrentUser();

	return (
		<div className="container">
			<PageHeader
				title="Profile and Account Info"
				subTitle="Analysis Beyond The Box Score"
				className={css`padding; 24px; background-color: #f5f5f5;`}
			>
				<Descriptions size="small" column={3}>
					<Descriptions.Item label="User">{currentUser.username}</Descriptions.Item>
					<Descriptions.Item label="Email">{currentUser.email}</Descriptions.Item>
          <Descriptions.Item label="Account type"><strong>Premium</strong></Descriptions.Item>
					<Descriptions.Item label="Permissions">
						{currentUser.roles && currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
					</Descriptions.Item>
				</Descriptions>
			</PageHeader>
		</div>
	);
};

export default Profile;
