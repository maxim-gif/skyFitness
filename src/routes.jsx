import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './components/pages/main/Main';
import { Yoga } from './components/pages/yoga/Yoga';
import { Auth } from './components/pages/auth/Auth';
import { Reg } from './components/pages/reg/Reg';

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />

				<Route path='/yoga' element={<Yoga />} />

				<Route path='/auth' element={<Auth />} />

				<Route path='/reg' element={<Reg />} />
			</Routes>
		</BrowserRouter>
	);
}