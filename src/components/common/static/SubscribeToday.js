import { Button, Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/css';

const { Title } = Typography;

const SubscribeToday = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/subscribe');
  };
  return (
    <>
      <div
        className={css`
          justify-content: center;
          align-items: center;
        `}
      >
        {/* TODO: Add button that takes user to subscription */}
        <Card title='SUBSCRIBE' bordered style={{ margin: 30 }}>
          <Button
            style={{
              borderRadius: '20px',
              backgroundColor: '#0066b2',
              color: '#fff',
            }}
            onClick={handleClick}
          >
            SUBSCRIBE NOW
          </Button>
          <Title level={3} style={{ color: 'brown' }}>
            Subscribe Today for <span style={{ color: 'black' }}>$30</span> to
            Receive Unlimited Access To Our Statistics from the Past 5 Years!
          </Title>
        </Card>
      </div>
    </>
  );
};

export default SubscribeToday;
