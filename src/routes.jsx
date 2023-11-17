import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './components/pages/main/Main';
import { Auth } from './components/pages/auth/Auth';
import { Reg } from './components/pages/reg/Reg';
// import { PageCourses } from './components/pages/kurses/kourses';
import { Profile } from './components/pages/profile';
import { NotFoundPage } from './components/pages/notFound/NotFound';
import { CoursesPage } from './components/pages/courses/Сourses';
import { WorkOut } from './components/pages/workoutPage';



export const AppRoutes = () => {

	

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main  />} />

				<Route path='/course/:id' element={<CoursesPage />} />

				<Route path='/auth' element={<Auth />} />

				<Route path='/reg' element={<Reg />} />

				<Route path='/profile' element={<Profile />} />

				<Route path='/workout' element={<WorkOut />} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}