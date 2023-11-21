import { useState } from 'react';
import * as S from "./forms.style"

export const FormPassword = () =>{
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = () =>{
        if(password !== confirmPassword){
            setError("Пароли не совпадают");
        }
        else if(password === ''){
            setError("Пароль не может быть пустым");
        }
        else {
            setError(null);
        window.location.reload();
        }
    }

	return (
		<S.Wrapper>
        <S.Container>
        <S.LogInForm>
            <S.Logo src='/logo2.png'></S.Logo>
            <S.Span>Новый пароль:</S.Span>
            <S.PasswordInput type='password' placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)}/>
            <S.PasswordInput type='password' placeholder='Подтвердите Пароль' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            {error && <S.Error>{error}</S.Error>}
            <S.SaveButton onClick={handleSubmit}>Сохранить</S.SaveButton>
        </S.LogInForm>
        </S.Container>
        </S.Wrapper>
    )
}
