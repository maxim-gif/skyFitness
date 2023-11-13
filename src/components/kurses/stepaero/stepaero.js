import { Link, useParams } from "react-router-dom";
import * as S from "./stepaero.style";
import React from "react";
import { courses } from "../content";



export const PageCourses = (props) => {
  const logo = `${process.env.PUBLIC_URL}/logowhite.png`;
  let { id } = useParams();

  let idNumber = Number(id);

  let course = courses.find(course => course.id === idNumber);


  if (!course) {
    return null;
  }
  
  return (
    <React.Fragment>
        <React.Fragment>
          <S.MainCenterblock>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </S.MainCenterblock>
          <S.TextImg>
            <S.Text>{course.name}</S.Text>
            <img src={course.svgMain} alt="My SVG Icon"/>
          </S.TextImg>
          <S.Foryou>Подойдет для вас, если:</S.Foryou>
          <S.Ul>
            {course.foryou.map((item, index) => (
              <S.Ulli key={index}>
                <svg
                  width="67"
                  height="67"
                  viewBox="0 0 67 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="67" height="67" rx="33.5" fill="#C7E957" />
                  <path
                    d="M32.8989 22.8705C32.8989 25.2705 32.0349 26.2625 29.9549 26.2625H29.1869V28.9505H32.8989V45.7825H36.0989V21.7825H32.8989V22.8705Z"
                    fill="black"
                  />
                </svg>
                <S.Li>{item}</S.Li>
              </S.Ulli>
            ))}
          </S.Ul>
          <S.Directions>
            <p>Направления:</p>
          </S.Directions>
          <div>
            <S.DirectionsOl>
              {course.directions.map((direction, directionIndex) => (
                <S.Li key={directionIndex}>{direction}</S.Li>
              ))}
            </S.DirectionsOl>
          </div>
          <S.Description>
            <p>{course.description}</p>
          </S.Description>
          <S.Foot>
            <img src={course.svgLink} alt="My SVG Icon"/>
            <S.Span>{course.span}</S.Span>
          </S.Foot>
        </React.Fragment>
    </React.Fragment>
  );
};
