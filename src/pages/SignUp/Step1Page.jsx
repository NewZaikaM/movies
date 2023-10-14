import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Step from '../../components/Step/Step';
import TitleForm from '../../components/TitleForm/TitleForm';
import RedirectToTMDB from '../../components/RedirectToTMDB/RedirectToTMDB';

import { getRequestToken } from '../../store/authSlice/authSlice';

const Step1 = () => {
	const { request_token } = useSelector(({ auth }) => auth.currentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRequestToken());
	}, []);

	return (
		<Step>
			<TitleForm title="Confirm a token TMDB" />
			<RedirectToTMDB request_token={request_token} />
		</Step>
	);
};

export default Step1;
