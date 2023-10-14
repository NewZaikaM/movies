import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from './../../components/Dashboard/Dashboard';

import styles from './App.module.css';

function App() {
	const { request_token, session_id, name, email, password } = useSelector(
		({ auth }) => auth.currentUser,
	);
	const navigate = useNavigate();
	useEffect(() => {
		if (!request_token || !session_id || !name || !email || !password) {
			navigate('/');
		}
	}, []);

	return (
		<div className={styles.app}>
			<Dashboard />
			<Outlet />
		</div>
	);
}

export default App;
