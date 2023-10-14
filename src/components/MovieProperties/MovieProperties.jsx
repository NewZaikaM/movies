import React from 'react';
import { Typography } from '@mui/material';

import { connectWithComma } from '../../utils/other';

import styles from './MovieProperties.module.css';

const MovieProperties = ({ details }) => {
	return (
		<div className={styles.movieProperties}>
			<Typography variant="h1">{details.title}</Typography>
			<Typography variant="h3" component="p">
				Genres: {connectWithComma(details.genres)}
			</Typography>
			<Typography variant="h3" component="p">
				Languages: {connectWithComma(details.spoken_languages)}
			</Typography>
			<Typography variant="h3" component="p">
				Release date: {details.release_date}
			</Typography>
			<Typography variant="h3" component="p">
				Duration: {details.runtime} min
			</Typography>
			<Typography variant="h3" component="p">
				Rating: {Math.round(details.vote_average)} / 10
			</Typography>
		</div>
	);
};

export default MovieProperties;
