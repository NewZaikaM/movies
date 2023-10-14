import React from 'react';
import { LinearProgress, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Poster from '../../components/Poster/Poster';
import MovieProperties from '../../components/MovieProperties/MovieProperties';
import SliderPhotos from '../../components/SliderPhotos/SliderPhotos';

import useDetails from '../../hooks/useDetails';

import styles from './Details.module.css';

const Details = () => {
	const [{ details, credits, similar, pending }, icon, handleClick] =
		useDetails(<FavoriteIcon />, <FavoriteBorderIcon />);

	return (
		<div className={styles.details}>
			{pending ? (
				<LinearProgress />
			) : (
				<>
					<div className={styles.mainDetails}>
						<Poster onClick={handleClick} icon={icon} details={details} />
						<MovieProperties details={details} />
					</div>
					<Typography className={styles.overview}>
						{details.overview}
					</Typography>
					<SliderPhotos photos={credits} titleSlider={'Cast'} />
					<SliderPhotos
						photos={similar}
						titleSlider={'Similar movies'}
						movies
					/>
				</>
			)}
		</div>
	);
};

export default Details;
