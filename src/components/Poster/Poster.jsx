import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';

import styles from './Poster.module.css';

const Poster = ({onClick, icon, details}) => {
	return (
		<div className={styles.poster}>
			<IconButton onClick={onClick} className={styles.favorite}>
				{icon}
			</IconButton>
			<img
				src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
				alt={details.title}
				className={styles.img}
			/>
			<Link href={details.homepage} className={styles.link} variant="h4">
				Home page's {details.title}
			</Link>
		</div>
	);
};

export default Poster;
