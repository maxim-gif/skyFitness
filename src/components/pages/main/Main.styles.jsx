import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
	padding-top: 24px;
	padding-left: calc(50% - 577px);
	padding-right: calc(50% - 577px);
	min-height: 100vh;
	width: 100%;
	position: relative;
`;

export const Header = styled.div`
	
`;

export const LogoHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.img``;

export const AuthButton = styled.button`
	width: 77px;
	height: 36px;
	border: #140d40;
	border-radius: 46px;
	background: #140d40;
	color: #ffffff;
	font-size: 16px;
	font-weight: 400;
	text-align: center;
`;

export const TextHeader = styled.div``;

export const SmallText = styled.p`
	padding-top: 35px;
	font-size: 20px;
	font-weight: 400;
	line-height: 23px;
	letter-spacing: -0.05000000074505806px;
	text-align: left;
	color: rgba(255, 255, 255, 0.5);
`;

export const BigTextBlock = styled.div`
	display: flex;
	padding-top: 17px;
	display: flex;
	gap: 150px;
`;

export const BigText = styled.p`
	font-size: 60px;
	font-weight: 400;
	line-height: 55px;
	letter-spacing: -1.1687777042388916px;
	text-align: left;
	width: 830px;
`;

export const ChangeBodyBlock = styled.div`

`;

export const ChangeBodyImg = styled.img`
	position: absolute;
	top: 100px;
`;

export const Container = styled.div`
	padding-top: 52px;
	display: flex;
	flex-wrap: wrap;
	gap: 37px;
`;

export const Exercise = styled(NavLink)`
	width: 360px;
	height: 480px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const ExerciseG = styled.g`
	mix-blend-mode: multiply;
`;

export const ExerciseName = styled.span`
	font-family: 'Abhaya Libre', sans-serif;
	position: absolute;
	top: 35px;
	left: 30px;
	font-weight: 800;
	font-size: 36px;
	line-height: 40px;
	letter-spacing: -0.5px;
	text-align: left;
	color: rgba(0, 0, 0, 1);
`;