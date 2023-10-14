import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import FieldText from './../../Fields/FiledText/FieldText';
import FieldPassword from './../../Fields/FieldPassword/FieldPassword';
import TwoActions from './../../TwoActions/TwoActions';

import styles from './SignUp.module.css';

import useWelcome, { NAME_FORM } from '../../../hooks/useWelcome';

const SignUp = () => {
	const [valuesForm, changeField, handleSubmit] = useWelcome(NAME_FORM.SIGN_UP);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<FieldText
				id="name"
				label="Name"
				value={valuesForm.name}
				handleChange={changeField}
				error={valuesForm.nameError}
			/>
			<FieldText
				id="email"
				label="Email"
				value={valuesForm.email}
				handleChange={changeField}
				error={valuesForm.emailError}
			/>
			<FieldPassword
				id="password"
				label="Password"
				value={valuesForm.password}
				handleChange={changeField}
				error={valuesForm.passwordError}
			/>
			<FieldPassword
				id="repassword"
				label="Repeat password"
				value={valuesForm.repassword}
				handleChange={changeField}
				error={valuesForm.repasswordError}
			/>
			<TwoActions className={''}>
				<Link className={styles.link} to="/sign-in">
					Already have an account? Sign in
				</Link>
				<Button className={styles.submit} variant="contained" type="submit">
					Sign Up
				</Button>
			</TwoActions>
		</form>
	);
};

export default SignUp;
