import React from 'react';

import WelcomePage from '../pages/Welcome/WelcomePage';
import Welcome from '../components/Welcome/Welcome';

import routerSignIn from './routerSignIn';
import routersSignUp from './routerSignUp';

const routerWelcome = {
	path: '/',
	element: <WelcomePage />,
	children: [
		{
			path: '/',
			element: <Welcome />,
		},
    routerSignIn,
		...routersSignUp,
	],
};

export default routerWelcome;
