import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';

import useShowed from '../../../hooks/useShowed';

import styles from './FieldPassword.module.css';

const FieldPassword = ({ id, label, value, handleChange, error }) => {
	const { showed, switchShowed } = useShowed();

	return (
		<FormControl fullWidth variant="outlined" size="medium">
			<InputLabel htmlFor={id} className={styles.font}>
				{label}*
			</InputLabel>
			<OutlinedInput
				value={value}
				onChange={handleChange}
				name={id}
				id={id}
				type={showed ? 'text' : 'password'}
				className={styles.font}
				error={!!error}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={switchShowed}
							edge="end"
						>
							{showed ? (
								<VisibilityOff className={styles.size} />
							) : (
								<Visibility className={styles.size} />
							)}
						</IconButton>
					</InputAdornment>
				}
				label={label}
			/>
			<FormHelperText className={styles.font} error>
				{!!error && error}
			</FormHelperText>
		</FormControl>
	);
};

export default FieldPassword;
