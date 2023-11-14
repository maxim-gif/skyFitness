import React from 'react';
import * as S from './Main.styles';
import { mainArray } from './MainArray';
import { NavLink } from 'react-router-dom';

export const Main = () => {
	function goTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -10);
			setTimeout(goTop, 0);
		}
	}

	return (
		<S.Wrapper>
			<S.Header>
				<S.LogoHeader>
					<S.Logo src='/logo.png'></S.Logo>
					<NavLink to='/auth'>
						<S.AuthButton>Войти</S.AuthButton>
					</NavLink>
				</S.LogoHeader>
				<S.TextHeader>
					<S.SmallText>Онлайн-тренировки для занятий дома</S.SmallText>
					<S.BigTextBlock>
						<S.BigText>
							Начните заниматься спортом и улучшите качество жизни
						</S.BigText>
						<S.ChangeBodyBlock>
							<S.ChangeBodyImg src='/changeBody.png' />
						</S.ChangeBodyBlock>
					</S.BigTextBlock>
				</S.TextHeader>
			</S.Header>
			<S.Container>
				{mainArray.map(exercise => (
					<S.Exercise to={`/course/${exercise.id}`} key={exercise.id}>
						{exercise.name}
						{exercise.img}
					</S.Exercise>
				))}
			</S.Container>
			<S.Footer>
				<S.UpButton onClick={goTop}>Наверх ↑</S.UpButton>
			</S.Footer>
		</S.Wrapper>
	);
};
