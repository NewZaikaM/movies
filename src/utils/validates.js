const isValidName = (name) => {
	if (name.length > 0 && name.length <= 8) return true;
	return false;
};
const isValidEmail = (email) => {
	let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

	return regex.test(email);
};
const isValidPassword = (password) => {
	return password.length > 4;
};
const isEqualPassword = (password, repassword) => {
	return password === repassword;
};

const checkExistUser = (email, users) => {
	if (!users.length) return false;
	const searchedUser = users.find((user) => user.email === email);
	return searchedUser;
};

const checkSignUp = (valuesForm, setValuesForm, users) => {
	const isNotSearchedUser = !checkExistUser(valuesForm.email, users);

	if (isNotSearchedUser) {
		return true;
	} else {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				emailError: 'An account with this email already exists',
			};
		});
	}
};

const isValidSignUp = (valuesForm, setValuesForm, users) => {
	const validName = isValidName(valuesForm.name);
	const validEmail = isValidEmail(valuesForm.email);
	const validPassword = isValidPassword(valuesForm.password);
	const validRepassword = isEqualPassword(
		valuesForm.password,
		valuesForm.repassword,
	);

	if (validName && validEmail && validPassword && validRepassword) {
		return checkSignUp(valuesForm, setValuesForm, users);
	}
	if (!validName) {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				nameError: "Name length mustn't be greater than 8",
			};
		});
	} else {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				nameError: null,
			};
		});
	}
	if (!validEmail) {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				emailError: 'Enter a correct email',
			};
		});
	} else {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				emailError: null,
			};
		});
	}
	if (!validPassword) {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				passwordError: 'Password length must be greater than 4',
			};
		});
	} else {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				passwordError: null,
			};
		});
	}
	if (!validRepassword) {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				repasswordError: 'Passwords must be equal',
			};
		});
	} else {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				repasswordError: null,
			};
		});
	}
};
const isValidSignIn = (valuesForm, setValuesForm, users) => {
	if (valuesForm.email === '') {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				emailError: 'Enter a correct email',
				passwordError: 'Enter a correct password',
			};
		});

		return { valid: false };
	}

	const searchedUser = checkExistUser(valuesForm.email, users);

	if (!searchedUser) {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				emailError: "An account with this email doesn't exists",
				passwordError: ' ',
			};
		});

		return { valid: false };
	}

	const isCorrectedPassword = isEqualPassword(
		searchedUser.password,
		valuesForm.password,
	);

	if (isCorrectedPassword) {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				emailError: null,
				passwordError: null,
			};
		});
		return { valid: true, searchedUser };
	} else {
		setValuesForm((prevForm) => {
			return {
				...prevForm,
				emailError: 'Enter a correct email',
				passwordError: 'Enter a correct password',
			};
		});

		return { valid: false };
	}
};

export { isValidSignUp, isValidSignIn };
