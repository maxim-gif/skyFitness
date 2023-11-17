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

    </S.Wrapper>
  );
};
