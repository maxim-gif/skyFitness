import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-left: calc(50% - 577px);
  padding-right: calc(50% - 577px);
  background: #fafafa;
`;

export const LogoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

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

export const MyProf = styled.h1`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 116.667% */
  padding-top: 75px;
`;

export const SpanName = styled.span`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;

export const NamePass = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  padding-top: 40px;
  gap: 20px;
`;

export const ButtonS = styled.button`
  border-radius: 46px;
  background: var(--palette-purple-90, #580ea2);
  width: 275px;
  height: 52px;
  flex-shrink: 0;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.05px;
  margin-top: 20px;

  &:hover {
    background: #2d1f79;
  }

  &:active {
    background: #3b29a1;
  }
`;

export const MyCoursesW = styled.h1`
color: #000;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: 56px; /* 116.667% */
padding-top: 91px;
`;

export const NameCourse = styled.p`
color: #000;

font-variant-numeric: lining-nums proportional-nums;
font-family: Abhaya Libre ExtraBold;
font-size: 36px;
font-style: normal;
font-weight: 800;
line-height: 110%; /* 39.6px */
letter-spacing: -0.5px;
`;

export const MyCourses = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding-top: 60px;
`;