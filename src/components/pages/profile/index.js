import { NavLink } from "react-router-dom";
import * as S from "./ex.style";
import { useSelector } from "react-redux";
import { signOut } from "@firebase/auth";
import { getData } from "../../api/api";
import { useEffect, useState } from "react";
import { MenuProfile } from "../../menuProf";


export const Profile = () => {
  const user = useSelector((state) => state.playerControl.dataUser);
  const [values, setValues] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);
  
  const openModal = () => setModalIsOpen(true);

  const courseNameMapping = {
    bodyflex: './bodyflex.svg',
    dancefitness: './dancefitness.svg',
    stepaerobics: './stepaerobics.svg',
    stretching: './stretching.svg',
    yoga: './yoga.svg',
  };

  const courseTitleMapping = {
    bodyflex: 'Бодифлекс',
    dancefitness: 'Танцевальный фитнес',
    stepaerobics: 'Степ-аэробика',
    stretching: 'Стретчинг',
    yoga: 'Йога',
  };

  const idToCourse = {
    0: 'bodyflex',
    1: 'dancefitness',
    2: 'stepaerobics',
    3: 'stretching',
    4: 'yoga'
  };

  useEffect(() => {
    getData()
      .then((data) => {
        const vals = Object.entries(data).map(([courseName, courseData]) => ({
          ...courseData,
          _id: courseName
        }));
        setValues(vals);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(values);

  console.log(user.courses);

  const exit = () => {
    signOut()
  }


  return (
    <S.Wrapper>
      <S.LogoHeader>
        <NavLink to="/">
          <S.Logo src="/logo2.png"></S.Logo>
        </NavLink>
        <S.MenuStyle>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<circle cx="25" cy="25" r="25" fill="#D9D9D9"/>
</svg>
        <S.SpanName>{user.email ? user.email : 'Войти'}</S.SpanName>
        <MenuProfile/>
        </S.MenuStyle>
      </S.LogoHeader>
      <S.MyProf>Мой профиль</S.MyProf>
      <S.NamePass>
        <S.SpanName>Мой логин: {user.email}</S.SpanName>
        <S.SpanName>Пароль: {user.password}</S.SpanName>
        <S.ButtonS>Редактировать логин</S.ButtonS>
        <S.ButtonS>Редактировать пароль</S.ButtonS>
      </S.NamePass>
      <S.MyCoursesW>Мои курсы</S.MyCoursesW>
      <S.MyCourses>
      {Object.keys(user.courses).map((courseKey) => {
    const courseSvg = courseNameMapping[courseKey];
    const courseTitle = courseTitleMapping[courseKey];
    const course = values.find(value => value._id === courseKey);

    return (
      <S.CouresNameAndSVG key={courseKey}>
        <S.NameCourse>{courseTitle}</S.NameCourse>
        <div>
        <img src={courseSvg} alt={courseTitle}/>
        </div>
        <S.ButtonGo onClick={openModal} key={courseKey}>Перейти</S.ButtonGo>
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

            {course && course.workout.map((lesson, index) => (
              <S.Element>
                <a href={lesson.link} key={index}>
                  {lesson.name}
                </a>
              </S.Element>
            ))}
          </S.ListOfLessons>
        )}
      </S.CouresNameAndSVG>
    )
  })}
    </S.MyCourses>
    </S.Wrapper>
  );
};
