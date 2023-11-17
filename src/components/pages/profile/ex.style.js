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
  align-items: flex-end;
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
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 116.667% */
  padding-top: 75px;
`;

export const SpanName = styled.span`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
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
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 116.667% */
  padding-top: 91px;
`;

export const NameCourse = styled.span`
  width: 290px;
  height: 120px;
  position: absolute;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Abhaya Libre ExtraBold;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 110%;
  letter-spacing: -0.5px;
  padding-top: 30px;
  padding-left: 30px;
`;

export const MyCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-top: 60px;
  width: 1200px;
  padding-bottom: 60px;
`;

export const CouresNameAndSVG = styled.div`
  border-radius: 29.998px;
  background: #fff;
  box-shadow: -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
`;

export const ButtonGo = styled.button`
  bottom: 40px;
  left: 20px;
  background: rgba(199, 233, 87, 1);
  width: 147px;
  height: 48px;
  border-radius: 46px;
  color: rgba(0, 0, 0, 1);
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
  text-align: center;
  border: none;
  position: relative;

  &:hover {
    background: #daf289;
  }
  &:active {
    background: #ebffab;
  }
`;

export const MenuStyle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`;
export const ListOfLessons = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  width: 444px;
  height: 626px;
  gap: 12px;
  border-radius: 12px;
  background: #fff;
  align-items: center;
`;

export const Element = styled.div`
  border-radius: 26px;
  border: 1px solid var(--mint-90, #06b16e);
  width: 278px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CloseButton = styled.div`
  display: flex;
  cursor: pointer;
  z-index: 10;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  left: 200px;
  top: 5px;
`;
export const BackModal = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

