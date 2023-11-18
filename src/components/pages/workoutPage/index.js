import { NavLink } from 'react-router-dom';
import * as S from './workout.style';
import { useSelector } from 'react-redux';

import { MenuProfile } from '../../menuProf/MenuProfile';
import { useEffect, useState } from 'react';

export const WorkOut = () => {
  const [color, setColor] = useState();

	const name = localStorage.getItem('name');

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	const user = useSelector(state => state.playerControl.dataUser);

	const storedLesson = window.localStorage.getItem('lesson');
	const lesson = storedLesson ? JSON.parse(storedLesson) : null;

	const renderExercises = () => {
		if (lesson.exercises && lesson.exercises.length > 0) {
			return  lesson.exercises.map((exercise, index) => (
				<S.LiEx key={index}>{exercise}</S.LiEx>
			));
		} else {
			return '';
		}
	};

  

	useEffect(() => {
		setColor(false);
	}, []);

	function mouseOut() {
		if (isOpen) {
			toggleOpen();
		}
	}

	console.log(lesson.exercises);

	return (
		<S.Wrapper>
			<S.LogoHeader>
				<NavLink to='/'>
					<S.Logo src='/logo2.png'></S.Logo>
				</NavLink>
				<S.MenuStyle onMouseLeave={mouseOut} onClick={toggleOpen}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='50'
						height='50'
						viewBox='0 0 50 50'
						fill='none'
					>
						<circle
							cx='25'
							cy='25'
							r='25'
							fill={color ? 'rgb(105, 105, 105)' : '#D9D9D9'}
						/>
					</svg>
					<S.SpanName $color={color}>{name}</S.SpanName>
					<MenuProfile color={color} isOpen={isOpen} />
				</S.MenuStyle>
			</S.LogoHeader>
			<S.MyProf>{lesson.name}</S.MyProf>
			<iframe
				width='1160'
				height='639'
				src={lesson.link}
				frameborder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
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
