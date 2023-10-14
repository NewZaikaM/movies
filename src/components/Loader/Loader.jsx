import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import { zeroToHundred } from '../../utils/other';
import { useNavigate } from 'react-router-dom';

import styles from './Loader.module.css';

function Loader() {
	const { session_id } = useSelector(({ auth }) => auth.currentUser);
	const [progress, setProgress] = useState(0);
	const navigate = useNavigate();
	useEffect(() => {
		zeroToHundred(setProgress);
	}, []);

	if (progress >= 100) {
		navigate(`/user/${session_id}/home`);
	}

	return (
		<Box className={styles.block}>
			<CircularProgress variant="determinate" value={progress} />
			<Box className={styles.innerBlock}>
				<Typography variant="caption" component="div" color="text.secondary">
					{`${Math.round(progress)}%`}
				</Typography>
			</Box>
		</Box>
	);
}
export default Loader;
