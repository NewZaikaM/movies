import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import FieldText from './../../Fields/FiledText/FieldText';
import FieldPassword from './../../Fields/FieldPassword/FieldPassword';
import TwoActions from './../../TwoActions/TwoActions';

import styles from './SignIn.module.css';

import useWelcome, { NAME_FORM } from '../../../hooks/useWelcome';

const SignIn = () => {
	const [valuesForm, changeField, handleSubmit] = useWelcome(NAME_FORM.SIGN_IN);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
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
			<TwoActions className={''}>
				<Link className={styles.link} to="/sign-up/step-1">
					Don't have an account? Sign Up
				</Link>
				<Button className={styles.submit} type="submit" variant="contained">
					Sign In
				</Button>
			</TwoActions>
		</form>
	);
};

export default SignIn;
