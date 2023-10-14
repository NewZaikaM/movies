import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import apiTMDB from '../../api/api';

export const deleteMovieFromFavorite = createAsyncThunk(
	'movies/deleteMovieFromFavorite',
	async ({ session_id, movie_id }) => {
		await apiTMDB.deleteMovieFromFavorite(session_id, movie_id);
		return await apiTMDB.getFullFavoriteMovies(1, session_id);
	},
);
export const addMovieInFavorite = createAsyncThunk(
	'movies/addMovieInFavorite',
	async ({ session_id, movie_id }) => {
		await apiTMDB.addMovieInFavorite(session_id, movie_id);
		return await apiTMDB.getFullFavoriteMovies(1, session_id);
	},
);
export const getFullFavoriteMovies = createAsyncThunk(
	'movies/getFullFavoriteMovies',
	async (session_id) => {
		return await apiTMDB.getFullFavoriteMovies(1, session_id);
	},
);

const initialState = {
	setOfFavorite: [],
	pagination: {
		currentPage: 1,
		maxPages: 1,
	},
	pending: false,
};

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		setCurrentPage(state, { payload }) {
			state.pagination.currentPage = payload;
		},
		setMaxPage(state, { payload }) {
			state.pagination.currentPage = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(deleteMovieFromFavorite.pending, (state) => {
				state.pending = true;
			})
			.addCase(deleteMovieFromFavorite.fulfilled, (state, { payload }) => {
				state.pending = false;
				state.setOfFavorite = payload.favorite;
				state.pagination.maxPages = payload.maxPages;
			});
		builder
			.addCase(addMovieInFavorite.pending, (state) => {
				state.pending = true;
			})
			.addCase(addMovieInFavorite.fulfilled, (state, { payload }) => {
				state.pending = false;
				state.setOfFavorite = payload.favorite;
				state.pagination.maxPages = payload.maxPages;
			});
		builder
			.addCase(getFullFavoriteMovies.pending, (state) => {
				state.pending = true;
			})
			.addCase(getFullFavoriteMovies.fulfilled, (state, { payload }) => {
				state.pending = false;
				state.setOfFavorite = payload.favorite;
				state.pagination.maxPages = payload.maxPages;
			});
	},
});

export const selectFavorite = createSelector(
	(state) => state.favorite,
	(favorite) => favorite,
);
export const selectPagination = createSelector(
	(state) => state.favorite,
	(favorite) => favorite.pagination,
);

const { setCurrentPage, setMaxPage } = favoriteSlice.actions;
export { setCurrentPage, setMaxPage };
export default favoriteSlice.reducer;
