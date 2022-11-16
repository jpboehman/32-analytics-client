import { Card, Typography } from 'antd';

import { css } from '@emotion/css';

const { Title } = Typography;

export const TeamEPSSDesc = () => (
    <div
        className={css`
      font-size: 20px;
    `}
    >
        <Card
            title={
                howAccurateIsEPSHeader
            }
            bordered
            style={{ margin: 30 }}
        >
            <Title level={4}>
                {howAccurateIsEPSBody}
            </Title>
        </Card>
    </div>
);

const howAccurateIsEPSHeader = `How accurate is EPSS?`;
const howAccurateIsEPSBody = `For the NBA, there is a strong, positive correlation (0.93) between EPSS and win percentage. 
        For the NCAA, there is a strong, positive correlation (0.89) between EPSS and win percentage.
        As shown in the graph below and through our understanding of the correlation in both the NBA and NCAA,
        EPSS and win percentage are both strongly related.
        The higher the EPSS, the higher the win percentage. The lower the EPSS, the lower the win percentage.`;

export default TeamEPSSDesc;
