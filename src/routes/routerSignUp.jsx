import React from 'react';

import Step1 from '../pages/SignUp/Step1Page'
import Step2 from '../pages/SignUp/Step2Page'
import Step3 from '../pages/SignUp/Step3Page'

const routersSignUp = [
	{
		path: 'sign-up/step-1',
		element: (
			<Step1 />
		),
	},
	{
		path: `sign-up/step-2`,
		element: (
			<Step2 />
		),
	},
	{
		path: 'sign-up/step-3',
		element: (
			<Step3 />
		),
	},
];

export default routersSignUp;
