import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './components/pages/main/Main';
import { Auth } from './components/pages/auth/Auth';
import { Reg } from './components/pages/reg/Reg';
import { ProfilePage } from './components/pages/profile/Profile';
import { CoursesPage } from './components/pages/courses/Сourses';
import { NotFoundPage } from './components/pages/notFound/NotFound';
import { WorkOut } from './components/pages/workoutPage';

import { useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserLessons, auth} from './components/api/api';
import { useDispatch } from 'react-redux';
import { signIn } from './components/store/actions/creators';

export const AppRoutes = () => {

	const dispatch = useDispatch();
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				(async () => {
					try {
						const userData = await getUserLessons();
						dispatch(signIn(userData));
						setUserData(userData)
					} catch (error) {
						console.log(error);
					}
				})();
			} else {
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main name={userData ? userData.email : 'Загрузка...'}/>} />

				<Route path='/course/:id' element={<CoursesPage name={userData ? userData.email : 'Загрузка...'}/>} />

				<Route path='/auth' element={<Auth />} />

				<Route path='/reg' element={<Reg />} />

				<Route path='/profile' element={<ProfilePage userData={userData}/>} />

				<Route path='/workout' element={<WorkOut userData={userData}/>} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};
