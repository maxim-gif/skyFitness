import styled from "styled-components";

export const MainCenterblock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: white;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 130px;
  align-content: flex-start;
  padding-top: 30px;
`;
export const TextImg = styled.div`
  padding-top: 75px;
`;
export const Text = styled.p`
z-index: 1;
    position: absolute;
    padding-left: 30px;
    border-radius: 30px;
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
    letter-spacing: -0.8px;
}
`;
export const Li = styled.li`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  width: 244px;
  text-align: left;
`;
export const Ul = styled.ul`
  padding-left: 170px;
  display: flex;
  gap: 178px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Ulli = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;
export const Foryou = styled.p`
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  padding-left: 140px;
  text-align: left;
  padding-top: 75px;
  padding-bottom: 40px;
`;
export const Directions = styled.div`
  text-align: left;
  padding-top: 107px;
  padding-left: 140px;
`;

export const DirectionsOl = styled.ol`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 170px;
    list-style-type: disc;
    `