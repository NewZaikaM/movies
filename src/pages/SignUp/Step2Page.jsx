import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Step from '../../components/Step/Step';
import TitleForm from '../../components/TitleForm/TitleForm';
import SignUp from '../../components/Forms/SignUp/SignUp';

const Step2 = () => {
	return (
		<Step>
			<TitleForm title="Sign up" />
			<SignUp />
		</Step>
	);
};

export default Step2;
