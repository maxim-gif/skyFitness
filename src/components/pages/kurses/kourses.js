import { Link, useParams } from "react-router-dom";
import * as S from "./kourses.style";
import React, { useEffect, useState } from "react";

import foot from "../../../img/coursesImage/foot.svg";
import svgAero from "../../../img/coursesImage/svgAero.svg";
import svgStrech from "../../../img/coursesImage/svgStrach.svg";
import svgYoga from "../../../img/coursesImage/svgYoga.svg";
import svgBodyfleks from "../../../img/coursesImage/svgBodyfleks.svg";
import svgDance from "../../../img/coursesImage/svgDance.svg";
import hand from "../../../img/coursesImage/hand.svg";
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
<img src={hand} alt="OK"></img>
</div>
    </S.Modal>
    </S.BackModal>
)}
          </S.Foot>
          </S.Wrapper>
    </React.Fragment>
  );
};