import React from 'react';

import App from '../pages/App/App';
import HomePage from '../pages/Home/HomePage';
import FavoritePage from '../pages/Favorite/FavoritePage';
import Details from '../pages/Details/Details';

const routerApp = {
	path: '/user/:userId',
	element: <App />,
	children: [
		{
			path: 'home',
			element: <HomePage />,
		},
		{
			path: 'favorite',
			element: <FavoritePage />,
		},
		{
			path: 'movie/:movieId',
			element: <Details />,
		},
	],
};

export default routerApp;
