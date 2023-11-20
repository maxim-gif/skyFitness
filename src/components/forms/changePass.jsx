import * as S from "./forms.style"

export const FormPassword = () =>{


	return (
		<S.Wrapper>
    <S.Container>
    <S.LogInForm>
        <S.Logo src='/logo2.png'></S.Logo>
        <S.Span>Новый пароль:</S.Span>
        <S.PasswordInput type='password' placeholder='Пароль' value=''/>
        <S.PasswordInput type='password' placeholder='Пароль' value=''/>
        {/* {error && <S.Error>{error}</S.Error>} */}
        <S.SaveButton>Сохранить</S.SaveButton>
    </S.LogInForm>
    </S.Container>
    </S.Wrapper>
    )
}