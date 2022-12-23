import { Button, Card, Divider, Descriptions, PageHeader } from 'antd';
import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import Footer from './common/static/Footer';
import { generalRequest } from '../services/httpService';

function Profile() {
  const currentUserData = useSelector((state) => state.data?.payload);

  const onSubmit = async () => {
    console.log(currentUserData)
    const { id, username, email } = currentUserData;
    try {
      const { data } = await generalRequest.post('/api/create-customer-portal-session', { 
        params: { id, username, email }
      });
      window.location = data.redirectUrl
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='container'>
        <PageHeader
          title='Profile and Account Info'
          subTitle='Analysis Beyond The Box Score'
          className={css`padding; 24px; background-color: #f5f5f5;`}
        >
          <Card title='Member Information:'>
          <Descriptions size='small' column={3}>
            <Descriptions.Item label='Username'>
              {currentUserData.username}
            </Descriptions.Item>
            <Descriptions.Item label='Email'>
              {currentUserData.email}
            </Descriptions.Item>
            <Descriptions.Item label='Account type'>
              <strong>Premium</strong>
            </Descriptions.Item>
          </Descriptions>
          </Card>
          <Divider />
          <Card title='Manage Subscription'>
            <Button onClick={onSubmit}>
              Edit payment information and manage subscription status
            </Button>
          </Card>
        </PageHeader>
      </div>
      <Footer />
    </>
  );
}

export default Profile;