import { NavLink } from "react-router-dom";
import * as S from "./workout.style";
import { useSelector } from "react-redux";
import { signOut } from "@firebase/auth";
import { getData } from "../../api/api";
import { useEffect, useState } from "react";
import { MenuProfile } from "../../menuProf";

export const WorkOut = () => {
  const user = useSelector((state) => state.playerControl.dataUser);
  const [values, setValues] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);

  const openModal = () => setModalIsOpen(true);


  useEffect(() => {
    getData()
      .then((data) => {
        const vals = Object.values(data);
        const found = vals.find((item) => item._id === "1");
        setValues(found);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(values);

  const exit = () => {
    signOut();
  };

  return (
    <S.Wrapper>
      <S.LogoHeader>
        <NavLink to="/">
          <S.Logo src="/logo2.png"></S.Logo>
        </NavLink>
        <S.MenuStyle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
          </svg>
          <S.SpanName>{user.email ? user.email : "Войти"}</S.SpanName>
          <MenuProfile />
        </S.MenuStyle>
      </S.LogoHeader>
      <S.MyProf>{values.name}</S.MyProf>
      <button onClick={openModal}> посмотреть уроки</button>
      {modalIsOpen && (
        <S.ListOfLessons>
                            <S.CloseButton onClick={closeModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="9xVvr7yCTUSTEWJ7qqwo6a_2xlEjUnUxAg1_gr1"
                      x1="1.956"
                      x2="54.829"
                      y1="1.956"
                      y2="54.829"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stop-color="#262626"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="#262626"
                        stop-opacity=".8"
                      ></stop>
                    </linearGradient>
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="url(#9xVvr7yCTUSTEWJ7qqwo6a_2xlEjUnUxAg1_gr1)"
                    ></circle>
                    <linearGradient
                      id="9xVvr7yCTUSTEWJ7qqwo6b_2xlEjUnUxAg1_gr2"
                      x1="740.406"
                      x2="787.897"
                      y1="-1145.624"
                      y2="-1158.349"
                      gradientTransform="translate(-743.775 1175.631)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stop-color="#262626"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="#262626"
                        stop-opacity=".8"
                      ></stop>
                    </linearGradient>
                    <polygon
                      fill="url(#9xVvr7yCTUSTEWJ7qqwo6b_2xlEjUnUxAg1_gr2)"
                      points="33.192,19.05 19.05,33.192 14.808,28.95 19.757,24 14.808,19.05 19.05,14.808 24,19.757 28.95,14.808"
                    ></polygon>
                    <linearGradient
                      id="9xVvr7yCTUSTEWJ7qqwo6c_2xlEjUnUxAg1_gr3"
                      x1="778.531"
                      x2="767.699"
                      y1="-1138.238"
                      y2="-1153.707"
                      gradientTransform="translate(-743.775 1175.631)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stop-color="#262626"
                        stop-opacity="0"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="#262626"
                        stop-opacity=".8"
                      ></stop>
                    </linearGradient>
                    <polygon
                      fill="url(#9xVvr7yCTUSTEWJ7qqwo6c_2xlEjUnUxAg1_gr3)"
                      points="33.192,28.95 28.95,33.192 24,28.243 28.243,24"
                    ></polygon>
                  </svg>
                </S.CloseButton>
          <S.SpanName>Выберите тренировку</S.SpanName>

          {values.workout &&
            values.workout.map((lesson, index) => (
              <S.Element>
                <a href={lesson.link} key={index}>
                  {lesson.name}
                </a>
              </S.Element>
            ))}
        </S.ListOfLessons>
      )}
    </S.Wrapper>
  );
};
