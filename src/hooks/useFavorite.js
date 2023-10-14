import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	getFullFavoriteMovies,
	selectFavorite,
	selectPagination,
	setCurrentPage,
} from '../store/favoriteSlice/favoriteSlice';
import { scrollToTop } from '../utils/other';

const useFavorite = () => {
	const { setOfFavorite, pending } = useSelector(selectFavorite);
	const { currentPage, maxPages } = useSelector(selectPagination);
	const { session_id } = useSelector(({ auth }) => auth.currentUser);
	const dispatch = useDispatch();

	const handleChange = (event, page) => {
		dispatch(setCurrentPage(page));
	};
	useEffect(() => {
		dispatch(getFullFavoriteMovies(session_id));
		scrollToTop();
	}, [currentPage]);

	return [{ setOfFavorite, pending }, { currentPage, maxPages }, handleChange];
};

export default useFavorite;
