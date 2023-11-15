import { NavLink } from "react-router-dom";
import * as S from "./ex.style";
import { useSelector } from "react-redux";
import { signOut } from "@firebase/auth";

export const Profile = () => {
  const user = useSelector((state) => state.playerControl.dataUser);
  const courseNameMapping = {
    bodyflex: 'Бодифлекс',
    dancefitness: 'Фитнес-танцы',
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
      <p>Привет {user.email}</p>
      <S.LogoHeader>
        <NavLink to="/">
          <S.Logo src="/logo.png"></S.Logo>
        </NavLink>
        <NavLink to='/auth'>
          <S.Button>{user.email ? 'Выйти' : 'Войти'}</S.Button>
        </NavLink>
      </S.LogoHeader>
      <p> Ваши курсы: </p>
      {Object.keys(user.courses).map((courseKey) => {
    const courseName = courseNameMapping[courseKey] || courseKey;
    return <p key={courseKey}>{courseName}</p>
})}
    </S.Wrapper>
  );
};
