import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
	addMovieInFavorite,
	getFullFavoriteMovies,
	selectFavorite,
} from '../store/favoriteSlice/favoriteSlice';
import {
	getDetailsMovie,
	selectDetails,
} from '../store/detailsSlice/detailsSlice';
import { getFavoriteForMovieDetails } from '../utils/other';

const useDetails = (favoriteIcon, unfavoriteIcon) => {
	const { setOfFavorite } = useSelector(selectFavorite);
	const { details, credits, similar, pending } = useSelector(selectDetails);
	const { session_id } = useSelector(({ auth }) => auth.currentUser);
	const dispatch = useDispatch();
	const { movieId } = useParams();

	useEffect(() => {
		dispatch(getFullFavoriteMovies(session_id));
	}, []);
	useEffect(() => {
		dispatch(getDetailsMovie(movieId));
	}, [movieId]);

	let icon = getFavoriteForMovieDetails(setOfFavorite, details) ? (
		favoriteIcon
	) : (
		unfavoriteIcon
	);
	const handleClick = () => {
		icon = favoriteIcon;
		dispatch(addMovieInFavorite({ session_id, movie_id: movieId }));
	};

	return [
		{ details, credits, similar, pending },
		icon,
		handleClick,
	];
};

export default useDetails;
