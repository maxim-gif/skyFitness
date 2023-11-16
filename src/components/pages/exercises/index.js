import { NavLink } from "react-router-dom";
import * as S from "./ex.style";
import { useSelector } from "react-redux";
import { signOut } from "@firebase/auth";


export const Profile = () => {
  const user = useSelector((state) => state.playerControl.dataUser);
  const courseNameMapping = {
    bodyflex: './bodyflex.svg',
    dancefitness: './dancefitness.svg',
    stepaerobics: './stepaerobics.svg',
    stretching: './stretching.svg',
    yoga: './yoga.svg',
  };

  const courseTitleMapping = {
    bodyflex: 'Бодифлекс',
    dancefitness: 'Танцевальная фитнес',
    stepaerobics: 'Степ-аэробика',
    stretching: 'Стретчинг',
    yoga: 'Йога',
  };


  const exit = () => {
    signOut()
  }
  console.log(user.email);
  console.log(user.courses);


  return (
    <S.Wrapper>
      <S.LogoHeader>
        <NavLink to="/">
          <S.Logo src="/logo2.png"></S.Logo>
        </NavLink>
        <NavLink to='/auth'>
          <S.Button>{user.email ? 'Выйти' : 'Войти'}</S.Button>
        </NavLink>
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

    <div key={courseKey}>
        <S.NameCourse>{courseTitle}</S.NameCourse>
        <img src={courseSvg} alt={courseTitle}/>
    </div>

  )
})}
    </S.MyCourses>
    </S.Wrapper>
  );
};
