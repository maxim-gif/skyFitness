import { NavLink } from "react-router-dom";
import * as S from "./Profile.styles";
import { useSelector } from "react-redux";
import { getData } from "../../api/api";
import { useEffect, useState } from "react";
import { ListLessons } from "../../listLesons";
import { MenuProfile } from "../../menuProf/MenuProfile";


export const Profile = () => {
  const name = localStorage.getItem('name');
  const user = useSelector((state) => state.playerControl.dataUser);
  const [values, setValues] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  // const [activeModal, setActiveModal] = useState(null);

  // const closeModal = () => setActiveModal(null);
  
  // const openModal = (courseKey) => setActiveModal(courseKey);

  // const courseNameMapping = {
  //   bodyflex: './bodyflex.svg',
  //   dancefitness: './dancefitness.svg',
  //   stepaerobics: './stepaerobics.svg',
  //   stretching: './stretching.svg',
  //   yoga: './yoga.svg',
  // };

  // const courseTitleMapping = {
  //   bodyflex: 'Бодифлекс',
  //   dancefitness: 'Танцевальный фитнес',
  //   stepaerobics: 'Степ-аэробика',
  //   stretching: 'Стретчинг',
  //   yoga: 'Йога',
  // };

  function mouseOut() {
		if (isOpen) {
			toggleOpen();
		}
	}

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



  return (
    <S.Wrapper>
      <S.LogoHeader>
        <NavLink to="/">
          <S.Logo src="/logo2.png"></S.Logo>
        </NavLink>
        <S.MenuStyle onMouseLeave={mouseOut} onClick={toggleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<circle cx="25" cy="25" r="25" fill="#D9D9D9"/>
</svg>
        <S.SpanName>{name}</S.SpanName>
        <MenuProfile isOpen={isOpen} />
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
    <ListLessons/>
    </S.Wrapper>
  );
};
