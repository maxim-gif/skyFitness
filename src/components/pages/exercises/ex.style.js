import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	padding-left: calc(50% - 577px);
	padding-right: calc(50% - 577px);
`;

export const LogoHeader = styled.div`    
display: flex;
flex-direction: row;
align-content: center;
align-items: center;
justify-content: space-between;`;

export const Logo = styled.img`
	width: 220px;
	height: 35px;
	margin-top: 33px;
`;
export const Button = styled.button`
  display: inline-flex;
  padding: 5px 16px 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 46px;
  background: #140d40;
  color: #fff;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &:hover {
    background: #2d1f79;
  }

  &:active {
    background: #3b29a1;
  }
`;