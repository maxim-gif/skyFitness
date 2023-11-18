import { NavLink } from "react-router-dom";
import * as S from "./workout.style";
import { useSelector } from "react-redux";
import { signOut } from "@firebase/auth";
import { getData } from "../../api/api";
import { useEffect, useState } from "react";
import { MenuProfile } from "../../menuProf/MenuProfile";


export const WorkOut = () => {
  const user = useSelector((state) => state.playerControl.dataUser);
  const [values, setValues] = useState([]);

  const storedLesson = window.localStorage.getItem("lesson");
  const lesson = storedLesson ? JSON.parse(storedLesson) : null;

  const renderExercises = () => {
    if (lesson.exercises && lesson.exercises.length > 0) {
      return lesson.exercises.map((exercise, index) => (
        <S.LiEx key={index}>{exercise}</S.LiEx>
      ));
    } else {
      return "";
    }
  };

  console.log(lesson.exercises);

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
      <S.MyProf>{lesson.name}</S.MyProf>
      <iframe
        width="1160"
        height="639"
        src={lesson.link}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <S.ExProgress>
        <div>
          <S.SpanEx>Упражнения:</S.SpanEx>
          <ul>{renderExercises()}</ul>
        </div>
        <S.Progress>
        <S.SpanEx>Мой прогресс по тренировке:</S.SpanEx>
        </S.Progress>
      </S.ExProgress>
    </S.Wrapper>
  );
};
