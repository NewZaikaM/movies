import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from './RedirectToTMDB.module.css';

const RedirectToTMDB = ({ request_token }) => {
	const navigate = useNavigate();
	return (
		<div className={styles.border}>
			<h3 className={styles.title}>Instructions:</h3>
			<p className={styles.description}>
				You need to go to the site and register and confirm the third-party
				token for TMDB.
				<br />
				That is, a token from Movielist.
			</p>
			<Button
				size="large"
				variant="outlined"
				onClick={() => {
					window.open(
						`https://www.themoviedb.org/authenticate/${request_token}`,
						'_blank',
					);
					navigate('/sign-up/step-2');
				}}
				disabled={!request_token}
			>
				Generate token and redirect
			</Button>
		</div>
	);
};

export default RedirectToTMDB;
