import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilters, setOfSorts } from '../store/filtersSlice/filtersSlice';
import {
	getMoviesBySearch,
	getPopularMovies,
	getRatingMovies,
	getWatchingNowMovies,
	selectMovies,
	selectPagination,
	setCurrentPage,
} from '../store/moviesSlice/moviesSlice';
import { isShowedWatchingNow, scrollToTop } from '../utils/other';

const useHome = () => {
	const { search, sortBy, genres } = useSelector(selectFilters);
	const { watchingNow, setOfMovies, pending } = useSelector(selectMovies);
	const { currentPage, maxPages } = useSelector(selectPagination);
	const dispatch = useDispatch();

	const handleChange = (event, page) => {
		dispatch(setCurrentPage(page));
	};
	useEffect(() => {
		dispatch(getWatchingNowMovies());
	}, []);
	useEffect(() => {
		if (search === '') {
			const genres_ids = genres.map((genre) => genre.id).join(',');
			sortBy === setOfSorts.popular
				? dispatch(getPopularMovies({ page: currentPage, genres: genres_ids }))
				: dispatch(getRatingMovies({ page: currentPage, genres: genres_ids }));
		} else {
			dispatch(getMoviesBySearch({ page: currentPage, search }));
		}
		scrollToTop();
	}, [search, sortBy, genres, currentPage]);

	return [
		{ search, sortBy, genres },
		{ watchingNow, setOfMovies, pending },
		{ currentPage, maxPages },
		handleChange,
	];
};

export default useHome;
