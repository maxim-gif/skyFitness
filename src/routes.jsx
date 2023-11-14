import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './components/pages/main/Main';
import { Yoga } from './components/pages/yoga/Yoga';
import { Auth } from './components/pages/auth/Auth';

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />

				<Route path='/yoga' element={<Yoga />} />

				<Route path='auth' element={<Auth />} />
			</Routes>
		</BrowserRouter>
	);
}