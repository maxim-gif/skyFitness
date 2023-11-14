import React from 'react';
import * as S from './Main.styles';
import { mainArray } from './MainArray';

export const Main = () => {
	return (
		<S.Wrapper>
			<S.Header>
				<S.LogoHeader>
					<S.Logo src='/logo.png'></S.Logo>
					<S.AuthButton>Войти</S.AuthButton>
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
					<S.Exercise to={exercise.path} key={exercise.id}>
						{exercise.name}
						{exercise.img}
					</S.Exercise>
				))}
			</S.Container>
		</S.Wrapper>
	);
};
