import React, { useState } from 'react';
import { isValidSignIn } from '../utils/validates';
import { setCurrentUser } from '../store/authSlice/authSlice';

const useSignIn = () => {
	const [valuesForm, setValuesForm] = useState({
		email: '',
		password: '',
		emailError: null,
		passwordError: null,
	});

	const handleSignIn = (users, dispatch) => {
		const { valid, searchedUser } = isValidSignIn(
			valuesForm,
			setValuesForm,
			users,
		);
		if (valid) {
			dispatch(
				setCurrentUser({
					...searchedUser,
				}),
			);
		}

		return { valid, session_id: searchedUser.session_id };
	};

	return [valuesForm, setValuesForm, handleSignIn];
};

export default useSignIn;
