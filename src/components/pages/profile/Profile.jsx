import { NavLink } from 'react-router-dom';
import * as S from './Profile.styles';
import { useEffect, useState } from 'react';
import { MenuProfile } from '../../menuProf/MenuProfile';
import { ListLessons } from '../../listLesons';
import { getUserLessons, auth} from '../../api/api';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/actions/creators';
import { FormPassword } from '../../forms/changePass';
import { FormLogin } from '../../forms/changeLogin';

export const ProfilePage = () => {
	const name = window.localStorage.getItem('name');
	const [color, setColor] = useState();
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);
	const [userLesson, setUserLesson] = useState(
		JSON.parse(window.localStorage.getItem('lesson'))
	);

	const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(null);
	const openModalLogin = () => setModalIsOpenLogin(true);
	const closeModalLogin = () => setModalIsOpenLogin(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				(async () => {
					try {
						const userData = await getUserLessons();
						dispatch(signIn(userData));
						setUserLesson(userData.courses);
						console.log(userData);
					} catch (error) {
						console.log(error);
					}
				})();
			} else {
			}
		});

		return () => unsubscribe();
	}, []);

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
				<S.ButtonS onClick={openModalLogin}>Редактировать логин</S.ButtonS>
				{modalIsOpenLogin && <FormLogin closeModalLogin={closeModalLogin} />}
				<S.ButtonS onClick={openModal}>Редактировать пароль</S.ButtonS>
				{modalIsOpen && <FormPassword closeModal={closeModal} />}
			</S.NamePass>
			<S.MyCoursesW>Мои курсы</S.MyCoursesW>
			<ListLessons userLesson={userLesson} />
		</S.Wrapper>
	);
};
