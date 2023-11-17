import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './components/pages/main/Main';
import { Auth } from './components/pages/auth/Auth';
import { Reg } from './components/pages/reg/Reg';
import { CoursesPage } from './components/pages/courses/Сourses';
import { NotFoundPage } from './components/pages/notFound/NotFound';
import { ProfilePage } from './components/pages/profile/Profile';



export const AppRoutes = () => {

	

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main  />} />

				<Route path='/course/:id' element={<CoursesPage />} />

				<Route path='/auth' element={<Auth />} />

				<Route path='/reg' element={<Reg />} />

				<Route path='/profile' element={<ProfilePage />} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}