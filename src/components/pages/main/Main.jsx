import React from "react";
import * as S from './Main.styles';

export const Main = () => {
	return (
		<S.Wrapper>
			<S.Header>
				<S.LogoHeader>
					<S.Logo src="/logo.png"></S.Logo>
					<S.AuthButton>Войти</S.AuthButton>
				</S.LogoHeader>
			</S.Header>
			<S.Container>
				
			</S.Container>
		</S.Wrapper>
	)
}