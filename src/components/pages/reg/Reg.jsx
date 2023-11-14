import React from 'react';
import * as S from './Reg.styles';
import { NavLink } from 'react-router-dom';

export const Reg = () => {
	return (
		<S.Wrapper>
			<S.LogoHeader>
				<NavLink to='/'>
					<S.Logo src='/logo.png'></S.Logo>
				</NavLink>
			</S.LogoHeader>

			<S.Container>
				<S.LogInForm>
					<S.Logo src='/logo2.png'></S.Logo>
					<S.EmailInput type='email' placeholder='Логин' />

					<S.PasswordInput type='password' placeholder='Пароль' />
					<S.PasswordInputRepeat
						type='password'
						placeholder='Повторите пароль'
					/>
					<S.RegisterButton>Зарегистрироваться</S.RegisterButton>
				</S.LogInForm>
			</S.Container>
		</S.Wrapper>
	);
};
