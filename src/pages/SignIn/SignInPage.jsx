import React from 'react';

import TitleForm from '../../components/TitleForm/TitleForm';
import SignIn from '../../components/Forms/SignIn/SignIn';

import styles from './SignInPage.module.css';

const SignInPage = () => {
	return (
		<div className={styles.signIn}>
			<TitleForm title="Sign in" />
      <SignIn />
		</div>
	);
};

export default SignInPage;
