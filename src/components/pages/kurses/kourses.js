import { Link, useParams } from "react-router-dom";
import * as S from "./kourses.style";
import React, { useEffect, useState } from "react";

import foot from "../../../img/coursesImage/foot.svg";
import svgAero from "../../../img/coursesImage/svgAero.svg";
import svgStrech from "../../../img/coursesImage/svgStrach.svg";
import svgYoga from "../../../img/coursesImage/svgYoga.svg";
import svgBodyfleks from "../../../img/coursesImage/svgBodyfleks.svg";
import svgDance from "../../../img/coursesImage/svgDance.svg";
import { getData } from "../../api/api";



export const PageCourses = (props) => {

  const logo = `${process.env.PUBLIC_URL}/logowhite.png`;

  let { id } = useParams();

  const [values, setValues] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);
  
  const openModal = () => setModalIsOpen(true);

  useEffect(() => {
    getData()
      .then((data) => {
        const vals = Object.values(data);
        const found = vals.find((item) => item._id === id);
        setValues(found);
      })
      .catch((error) => console.error(error));
  }, [id]);  
  

  let svgMain;

  switch (Number(id)) {
    case 0:
      svgMain = svgBodyfleks ;
      break;
    case 1:
      svgMain =svgDance ;
      break;
    case 2:
      svgMain = svgAero;
      break;
    case 3:
      svgMain = svgStrech;
      break;
    default:
      svgMain = svgYoga ;
  }

  return (
    <React.Fragment>
<S.Wrapper>
          <div>
          <S.MainCenterblock>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <S.Button>Войти</S.Button>
          </S.MainCenterblock>
          </div>
          <S.TextImg>
            <S.Text>{values.name}</S.Text>
            <img src={svgMain} alt="My SVG Icon"/>
          </S.TextImg>
          <S.Foryou>Подойдет для вас, если:</S.Foryou>
          <S.Ul>
            {/* {values.foryou.map((item, index) => (
              <S.Ulli key={index}>
                <S.NnumberLi>{index+1}</S.NnumberLi>
                <S.Li>{item}</S.Li>
              </S.Ulli>
            ))} */}
          </S.Ul>
        <S.Foryou>Направления:</S.Foryou>
          <div>
            <S.DirectionsOl>
              {values.directions && values.directions.map((direction, directionIndex) => (
                <S.LiDw key={directionIndex}>{direction}</S.LiDw>
              ))}
            </S.DirectionsOl>
          </div>
          <S.Description>
            <S.StyledParagraph>{values.description}</S.StyledParagraph>
          </S.Description>
          <S.Foot>
            <img src={foot} alt="My SVG Icon"/>
            <S.Span>Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!</S.Span>
            <S.ButtonS onClick={openModal}>Записаться на тренировку</S.ButtonS>
            {modalIsOpen && (
    <S.BackModal>
    <S.Modal>
        <S.CloseButton onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<linearGradient id="9xVvr7yCTUSTEWJ7qqwo6a_2xlEjUnUxAg1_gr1" x1="1.956" x2="54.829" y1="1.956" y2="54.829" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#262626" stop-opacity="0"></stop><stop offset="1" stop-color="#262626" stop-opacity=".8"></stop></linearGradient><circle cx="24" cy="24" r="20" fill="url(#9xVvr7yCTUSTEWJ7qqwo6a_2xlEjUnUxAg1_gr1)"></circle><linearGradient id="9xVvr7yCTUSTEWJ7qqwo6b_2xlEjUnUxAg1_gr2" x1="740.406" x2="787.897" y1="-1145.624" y2="-1158.349" gradientTransform="translate(-743.775 1175.631)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#262626" stop-opacity="0"></stop><stop offset="1" stop-color="#262626" stop-opacity=".8"></stop></linearGradient><polygon fill="url(#9xVvr7yCTUSTEWJ7qqwo6b_2xlEjUnUxAg1_gr2)" points="33.192,19.05 19.05,33.192 14.808,28.95 19.757,24 14.808,19.05 19.05,14.808 24,19.757 28.95,14.808"></polygon><linearGradient id="9xVvr7yCTUSTEWJ7qqwo6c_2xlEjUnUxAg1_gr3" x1="778.531" x2="767.699" y1="-1138.238" y2="-1153.707" gradientTransform="translate(-743.775 1175.631)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#262626" stop-opacity="0"></stop><stop offset="1" stop-color="#262626" stop-opacity=".8"></stop></linearGradient><polygon fill="url(#9xVvr7yCTUSTEWJ7qqwo6c_2xlEjUnUxAg1_gr3)" points="33.192,28.95 28.95,33.192 24,28.243 28.243,24"></polygon>
        </svg>
        </S.CloseButton>
        <S.SpanS>Вы успешно записались!</S.SpanS>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="444px" height="360px" viewBox="0 0 196 212" fill="none">
  <path d="M95.0258 274.606L116.477 173.471C126.163 170.565 148.143 149.771 160.756 122.272C176.522 87.8982 177.609 60.6892 174.025 58.0942C164.35 51.0894 162.489 79.0702 145.597 110.018C151.973 96.6649 168.501 42.815 160.659 34.9677C149.829 24.1305 134.338 82.3238 128.909 100.472C133.14 82.6761 151.937 17.853 136.423 16.157C126.438 15.0652 115.821 64.2376 110.361 86.5916C112.651 75.1078 111.729 60.7064 98.6771 55.5132C79.5958 47.9207 70.3473 79.901 79.5664 83.7596C83.0291 85.2089 87.7412 81.9936 91.154 77.7749C92.2042 82.6208 91.0998 96.9574 78.2807 115.537C76.6687 115.366 74.9832 115.311 73.2245 115.381C76.0737 110.926 80.1575 97.875 80.5594 91.2669C81.0619 83.0069 66.8154 77.0442 52.4333 111.406C44.7894 129.669 59.3465 146.342 69.2466 155.476L30.6609 247.666L95.0258 274.606Z" fill="#E9D4FF"/>
  <path d="M95.0258 274.606L116.477 173.471C126.163 170.565 148.143 149.771 160.756 122.272C176.522 87.8982 177.609 60.6892 174.025 58.0942C164.35 51.0894 162.489 79.0702 145.597 110.018C151.973 96.6649 168.501 42.815 160.659 34.9677C149.829 24.1305 134.338 82.3238 128.909 100.472C133.14 82.6761 151.937 17.853 136.423 16.157C125.499 14.9626 113.818 73.9322 108.962 92.1233C112.615 80.2574 113.942 61.5871 98.6771 55.5132C79.5958 47.9207 70.3473 79.901 79.5664 83.7596C85.2654 86.1449 94.3487 75.895 95.4542 69.3319M30.6609 247.666L69.2466 155.476C59.3465 146.342 44.7894 129.669 52.4333 111.406C66.8154 77.0442 81.0619 83.0069 80.5594 91.2669C80.1575 97.875 76.0737 110.926 73.2245 115.381C94.4558 114.534 105.011 132.003 104.509 149.355" stroke="#271A58"/>
  <path d="M78.8491 86.4133C75.7907 90.5831 68.0061 98.1064 61.3356 94.8418" stroke="#271A58"/>
  <path d="M78.0828 66.5915C80.4233 68.8338 83.8943 75.3635 79.0536 83.5445" stroke="#271A58"/>
  <path d="M91.4025 77.682C91.3784 83.7784 91.7511 94.1775 78.2179 115.697" stroke="#271A58"/>
</svg>
</div>
    </S.Modal>
    </S.BackModal>
)}
          </S.Foot>
          </S.Wrapper>
    </React.Fragment>
  );
};