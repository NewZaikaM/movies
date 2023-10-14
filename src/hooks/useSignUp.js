import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { isValidSignUp } from '../utils/validates';
import {
	createUser,
	getSessionId,
	updateUsers,
} from '../store/authSlice/authSlice';

const useSignUp = () => {
	const { session_id, request_token } = useSelector(
		({ auth }) => auth.currentUser,
	);
	const [valuesForm, setValuesForm] = useState({
		name: '',
		email: '',
		password: '',
		repassword: '',
		nameError: null,
		emailError: null,
		passwordError: null,
		repasswordError: null,
	});

	const createNewUser = async (dispatch) => {
		await dispatch(getSessionId(request_token));
		const newUser = {
			name: valuesForm.name,
			email: valuesForm.email,
			password: valuesForm.password,
		};
		dispatch(createUser(newUser));
		dispatch(updateUsers());
	};

	const handleSignUp = (users, dispatch) => {
		const valid = isValidSignUp(valuesForm, setValuesForm, users);

		if (valid) {
			createNewUser(dispatch);
		}

		return { valid, session_id };
	};

	return [valuesForm, setValuesForm, handleSignUp];
};

export default useSignUp;
