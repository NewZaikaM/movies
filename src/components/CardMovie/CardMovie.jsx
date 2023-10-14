import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

import {
	deleteMovieFromFavorite,
	selectPagination,
} from '../../store/favoriteSlice/favoriteSlice';

import styles from './CardMovie.module.css';

function CardMovie({ dataOfMovie, withCloseButton }) {
	const { session_id } = useSelector(({ auth }) => auth.currentUser);
	const { currentPage } = useSelector(selectPagination);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { userId } = useParams();

	const deleteFromFavorite = () => {
		const movie_id = dataOfMovie.id;
		dispatch(deleteMovieFromFavorite({ session_id, movie_id }));
	};
	const handleClick = () => {
		const movieId = dataOfMovie.id;
		navigate(`/user/${userId}/movie/${movieId}`);
	};

	if(!dataOfMovie.poster_path) {
		return <></>;
	}

	return (
		<Card className={styles.card}>
			{withCloseButton && (
				<Button
					fullWidth
					size="large"
					className={styles.close}
					onClick={deleteFromFavorite}
				>
					Delete
				</Button>
			)}
			<CardActionArea onClick={handleClick} className={styles.cardAction}>
				<CardMedia
					className={styles.img}
					component="img"
					image={`https://image.tmdb.org/t/p/w500/${dataOfMovie.poster_path}`}
					alt={`${dataOfMovie.title}`}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						className={styles.title}
					>
						{dataOfMovie.title}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						className={styles.overview}
					>
						{dataOfMovie.overview.slice(0, 125)}...
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default CardMovie;
