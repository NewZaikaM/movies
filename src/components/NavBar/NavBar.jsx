import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import home from './../../assets/home.svg';
import favorite from './../../assets/favorite.svg';

import styles from './NavBar.module.css';



const NavBar = () => {
	const { userId } = useParams();

	return (
		<div className={styles.navbar}>

			<NavLink
				to={`/user/${userId}/home`}
				className={({ isActive }) =>
					`${styles.link} ${isActive ? styles.linkActive : ''}`
				}
			>
				<img src={home} /> <span>Home</span>
			</NavLink>
			<NavLink
				to={`/user/${userId}/favorite`}
				className={({ isActive }) =>
					`${styles.link} ${isActive ? styles.linkActive : ''}`
				}
			>
				<img src={favorite} /> <span>Favorite</span>
			</NavLink>
		</div>
	);
};

export default NavBar;
