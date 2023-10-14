import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import TwoActions from '../TwoActions/TwoActions';

import logo from './../../assets/big-logo.svg';

import styles from './Welcome.module.css';

const Welcome = () => {
	const navigate = useNavigate();
	return (
		<>
			<img className={styles.logo} src={logo} alt="Logo" />
			<p className={styles.textBig}>Unlimited movies, TV shows, and more</p>
			<p className={styles.text}>Watch anywhere.</p>
			<TwoActions className={styles.buttons}>
				<Button
					variant="outlined"
					size="large"
					onClick={() => navigate('/sign-in')}
				>
					Sign in
				</Button>
				<Button
					variant="outlined"
					size="large"
					onClick={() => navigate('/sign-up/step-1')}
				>
					Sign up
				</Button>
			</TwoActions>
		</>
	);
};

export default Welcome;
