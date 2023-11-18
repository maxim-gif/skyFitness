import { NavLink } from 'react-router-dom';
import * as S from './Profile.styles';

import { useEffect, useState } from 'react';
import { MenuProfile } from '../../menuProf/MenuProfile';
import { ListLessons } from '../../listLesons';

export const ProfilePage = () => {
	const [color, setColor] = useState();

	const name = localStorage.getItem('name');

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	useEffect(() => {
		setColor(false);
	}, []);

	function mouseOut() {
		if (isOpen) {
			toggleOpen();
		}
	}

	return (
		<S.Wrapper>
			<S.LogoHeader>
				<NavLink to='/'>
					<S.Logo src='/logo2.png' />
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
			<S.MyProf>Мой профиль</S.MyProf>
			<S.NamePass>
				<S.SpanNameFull>Логин: {name}</S.SpanNameFull>
				{/* <S.SpanName>Пароль: {user.password}</S.SpanName> */}
				<S.ButtonS>Редактировать логин</S.ButtonS>
				<S.ButtonS>Редактировать пароль</S.ButtonS>
			</S.NamePass>
			<S.MyCoursesW>Мои курсы</S.MyCoursesW>
			<ListLessons />
		</S.Wrapper>
	);
};
