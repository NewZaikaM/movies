import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from './../NavBar/NavBar';
import Filters from '../Filters/Filters';

import logo from './../../assets/logo.svg';
import { clearCurrentUser } from '../../store/authSlice/authSlice';

import styles from './Dashboard.module.css';

const Dashboard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleExit = () => {
		dispatch(clearCurrentUser());
		navigate('/');
	};
	return (
		<div className={styles.nav}>
			<img src={logo} alt="logo: Movielist" className={styles.logo} />
			<NavBar />
			<div className={styles.separatedBlocks}>
				<Filters />
				<Button
					size="large"
					color="error"
					variant="outlined"
					onClick={handleExit}
				>
					Exit
				</Button>
			</div>
		</div>
	);
};

export default Dashboard;
