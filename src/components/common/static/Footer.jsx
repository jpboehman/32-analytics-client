import styled from 'styled-components';
import { mobile, tablet } from './responsive';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import { GoTriangleDown } from 'react-icons/go';
import { ImLocation } from 'react-icons/im';
import { FcPhone } from 'react-icons/fc';
import { MdAlternateEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../../assets/hardwood3chop.jpeg';
import Typography from 'antd/lib/typography/Typography';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-image: url(${image});
	${mobile({ flexDirection: 'column' })} ${tablet({ flexDirection: 'column' })};
	margin-bottom: 5px;
	border-radius: 5px;
	width: 100%;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
	font-size: 18px;
	font-weight: 600;
	${mobile({ fontSize: 10 })} ${tablet({ fontSize: 10 })};
`;

const Logo = styled.h1`color: black;`;

const Desc = styled.p`
	margin: 20px 0px;
	color: black;
	font-size: 18px;
	font-weight: 600;
	${mobile({ fontSize: 12 })} ${tablet({ fontSize: 12 })};
`;

const SocialContainer = styled.div`display: flex;`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 20%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	${mobile({ fontSize: 12, width: '20px', height: '20px' })} ${tablet({
			fontSize: 12,
			width: '20px',
			height: '20px'
		})};
`;

const Center = styled.div`
	flex: 1;
	flex-wrap: wrap;
	padding: 20px;
	${mobile({ display: 'none' })} ${tablet({ display: 'none' })};
`;

const Title = styled.h3`
	margin-bottom: 30px;
	color: black;
	${mobile({ fontSize: '14px' })} ${tablet({ fontSize: '14px' })};
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const LiLink = styled(Link)`
  width: 50%;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
    color: black;
    opacity: 0.8;
    transition: all 0.5s ease;
  }
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	color: black;
	font-size: 18px;
	font-weight: 600;
	${mobile({ fontSize: '12px' })} ${tablet({ fontSize: '12px' })};
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Button = styled.button`
	width: 100px;
	height: 30px;
	background-color: blue;
	font-weight: 900px;
	color: #fff;
	border: 0;
	border-radius: 10px;
	opacity: 0.6;
	:hover {
		opacity: 0.9;
		transform: scale(1.05);
		transition: all 0.5s ease-out;
	}
`;

const Footer = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/subscribe');
	};
	return (
		<Container>
			<Left>
				<Logo>32 ANALYTICS</Logo>
				<Desc>Analysis Beyond the Box Score</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<TiSocialFacebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<TiSocialInstagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<TiSocialTwitter />
					</SocialIcon>
				</SocialContainer>
				ThirtyTwo Analytics ©2020
			</Left>
			<Center>
				<Title>
					<GoTriangleDown />
				</Title>
				<List>
					<LiLink to="/">Home</LiLink>
					<LiLink to="/nba-player-season-grades-eps">NBA PSG-EPS</LiLink>
					<LiLink to="/nba-team-epss"> NBA Team EPSS</LiLink>
					<LiLink to="/nba-expected-wins">NBA Expected Wins</LiLink>
					<LiLink to="/ncaa-player-season-grades-eps">NCAA PSG-EPS</LiLink>
					<LiLink to="/ncaa-team-epss">NCAA Team EPSS</LiLink>
					<LiLink to="/ncaa-team-expected-wins">NCAA Expected Wins</LiLink>
					<LiLink to="/">Terms and conditions</LiLink>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Typography>32analytics@gmail.com</Typography>
				</ContactItem>
				<Button onClick={handleClick}>Subcribe</Button>
			</Right>
		</Container>
	);
};

export default Footer;
