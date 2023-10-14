import React from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';

import styles from './StepperForm.module.css'

const StepperForm = () => {
  const { pathname } = window.location;
	const numberStep = pathname.slice(-1) - 1;
	return (
		<>
			<Stepper
				className={styles.stepper}
				activeStep={numberStep}
				alternativeLabel
				orientation="horizontal"
			>
				<Step>
					<StepLabel>
						Registration on TMDB. <br />
						Confirmation of token
					</StepLabel>
				</Step>
				<Step>
					<StepLabel>Registration on Movielist</StepLabel>
				</Step>
			</Stepper>
		</>
	);
};

export default StepperForm;
