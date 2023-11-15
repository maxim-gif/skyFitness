import { NavLink } from "react-router-dom";
import * as S from "./ex.style";
import { useSelector } from "react-redux";

export const Profile = () => {
  const user = useSelector((state) => state.playerControl.dataUser);
  const courseNameMapping = {
    bodyflex: 'Бодифлекс',
    dancefitness: 'Фитнес-танцы',
    stepaerobics: 'Степ-аэробика',
    stretching: 'Стретчинг',
    yoga: 'Йога',
  };


  console.log(user.email);
  console.log(user.courses);

  if (!user) {
    // Выводим сообщение или компонент загрузки, пока данные забираются.
    return <div>Loading...</div>;
  }

  return (
    <S.Wrapper>
      <p>Привет {user.email}</p>
      <S.LogoHeader>
        <NavLink to="/">
          <S.Logo src="/logo.png"></S.Logo>
        </NavLink>
      </S.LogoHeader>
      <p> ваши курсы: </p>
      {Object.keys(user.courses).map((courseKey) => {
    const courseName = courseNameMapping[courseKey] || courseKey;
    return <p key={courseKey}>{courseName}</p>
})}
    </S.Wrapper>
  );
};
