import { useState } from 'react';
import * as S from "./forms.style"

export const FormLogin = () =>{


    const handleSubmit = () =>{
        window.location.reload();
        }

	return (
		<S.Wrapper>
        <S.Container>
        <S.LogInFormLogin>
            <S.Logo src='/logo2.png'></S.Logo>
            <S.Span>Новый логин:</S.Span>
            <S.PasswordInput type='string' placeholder='Логин'/>
            <S.SaveButton onClick={handleSubmit}>Сохранить</S.SaveButton>
        </S.LogInFormLogin>
        </S.Container>
        </S.Wrapper>
    )
}
