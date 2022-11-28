import { Descriptions, PageHeader } from 'antd';
import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import Footer from './common/static/Footer';

// This is the current entry point for the applicaiton - start editing here!
function Profile() {
  const currentUserData = useSelector((state) => state.data?.payload);

  return (
    <>
      <div className='container'>
        <PageHeader
          title='Profile and Account Info'
          subTitle='Analysis Beyond The Box Score'
          className={css`padding; 24px; background-color: #f5f5f5;`}
        >
          <Descriptions size='small' column={3}>
            <Descriptions.Item label='User'>
              {currentUserData.username}
            </Descriptions.Item>
            <Descriptions.Item label='Email'>
              {currentUserData.email}
            </Descriptions.Item>
            <Descriptions.Item label='Account type'>
              <strong>Premium</strong>
            </Descriptions.Item>
            {/* <Descriptions.Item label='Permissions'>
              {currentUserData.roles &&
                currentUserData.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </Descriptions.Item> */}
          </Descriptions>
        </PageHeader>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
