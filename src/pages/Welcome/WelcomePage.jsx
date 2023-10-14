import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './WelcomePage.module.css';

const WelcomePage = () => {
	return (
		<div className={styles.back}>
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
};

export default WelcomePage;
