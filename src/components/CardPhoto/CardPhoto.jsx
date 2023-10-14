import React from 'react';
import { Box, Card, CardActionArea, Typography } from '@mui/material';

import styles from './CardPhoto.module.css';

const CardPhoto = ({ photo, src, title, handleClick }) => {
	return (
		<div className={styles.slider}>
			<Card className={styles.card}>
				<CardActionArea
					key={photo.id}
					className={styles.action}
					onClick={handleClick}
				>
					<img
						src={`https://image.tmdb.org/t/p/w500/${src}`}
						alt={photo.name}
					/>
					<Typography className={styles.title} variant="h4">
						{title}
					</Typography>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default CardPhoto;
