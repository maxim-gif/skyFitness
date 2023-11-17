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


  useEffect(() => {
  getData()
  .then((data) => {
    const vals = Object.values(data);

    setValues(vals);
  })
  .catch((error) => console.error(error));
  }, [])

  console.log(values);

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
  return (

    <S.CouresNameAndSVG key={courseKey}>
        <S.NameCourse>{courseTitle}</S.NameCourse>
        <div>
        <img src={courseSvg} alt={courseTitle}/>
        </div>
        <S.ButtonGo>Перейти</S.ButtonGo>
    </S.CouresNameAndSVG>

  )
})}
    </S.MyCourses>
    </S.Wrapper>
  );
};
