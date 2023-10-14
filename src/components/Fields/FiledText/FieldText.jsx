import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import styles from './FieldText.module.css';

const FieldText = ({ id, label, value, handleChange, error }) => {
	return (
		<FormControl fullWidth variant="outlined" size="medium">
			<InputLabel htmlFor={id} className={styles.font}>
				{label}*
			</InputLabel>
			<OutlinedInput
				autoComplete="off"
				value={value}
				onChange={handleChange}
				name={id}
				id={id}
				type="text"
				label={label}
				className={styles.font}
				error={!!error}
			/>
			<FormHelperText className={styles.font} error>
				{!!error && error}
			</FormHelperText>
		</FormControl>
	);
};

export default FieldText;
