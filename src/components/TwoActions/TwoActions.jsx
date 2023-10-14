import React from 'react';

import styles from './TwoActions.module.css';

const TwoActions = ({ children, className }) => {
	return (
		<div className={`${styles.actions} ${!!className ? className : ''}`}>
			{children}
		</div>
	);
};

export default TwoActions;
