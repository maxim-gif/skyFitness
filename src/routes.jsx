import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './components/pages/main/Main';
import { Auth } from './components/pages/auth/Auth';
import { Reg } from './components/pages/reg/Reg';
import { PageCourses } from './components/pages/kurses/kourses';


export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />

				<Route path="/course/:id" element={<PageCourses />} />

				<Route path='/auth' element={<Auth />} />

				<Route path='/reg' element={<Reg />} />
			</Routes>
		</BrowserRouter>
	);
}