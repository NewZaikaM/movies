import React from 'react';

import StepperForm from '../StepperForm/StepperForm';

import styles from './Step.module.css';

const Step = ({ children }) => {
	return (
		<>
			<StepperForm />
			<div className={styles.step}>{children}</div>
		</>
	);
};

export default Step;
