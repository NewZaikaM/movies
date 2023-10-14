import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import apiTMDB from '../../api/api';

export const getWatchingNowMovies = createAsyncThunk(
	'movies/getWatchingNowMovies',
	async () => {
		return await apiTMDB.getWatchingNowMovies();
	},
);
export const getPopularMovies = createAsyncThunk(
	'movies/getPopularMovies',
	async ({ page, genres }) => {
		return await apiTMDB.getPopularMovies(page, genres);
	},
);
export const getRatingMovies = createAsyncThunk(
	'movies/getRatingMovies',
	async ({ page, genres }) => {
		return await apiTMDB.getRatingMovies(page, genres);
	},
);
export const getMoviesBySearch = createAsyncThunk(
	'movies/getMoviesBySearch',
	async ({ page, search }) => {
		return await apiTMDB.getMoviesBySearch(page, search);
	},
);

const initialState = {
	watchingNow: [],
	setOfMovies: [],
	pagination: {
		currentPage: 1,
		maxPages: 500,
	},
	pending: false,
};

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setCurrentPage(state, { payload }) {
			state.pagination.currentPage = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getWatchingNowMovies.pending, (state) => {
				state.pending = true;
			})
			.addCase(getWatchingNowMovies.fulfilled, (state, { payload }) => {
				state.pending = false;
				state.watchingNow = payload;
			});
		builder
			.addCase(getPopularMovies.pending, (state) => {
				state.pending = true;
			})
			.addCase(getPopularMovies.fulfilled, (state, { payload }) => {
				state.pending = false;
				state.setOfMovies = payload.results;
				if (payload.total_pages < state.pagination.maxPages) {
					state.pagination.maxPages = payload.total_pages;
				} else {
					state.pagination.maxPages = 500;
				}
			});
		builder
			.addCase(getRatingMovies.pending, (state) => {
				state.pending = true;
			})
			.addCase(getRatingMovies.fulfilled, (state, { payload }) => {
				state.pending = false;
				state.setOfMovies = payload.results;
				if (payload.total_pages < state.pagination.maxPages) {
					state.pagination.maxPages = payload.total_pages;
				} else {
					state.pagination.maxPages = 500;
				}
			});
		builder
			.addCase(getMoviesBySearch.pending, (state) => {
				state.pending = true;
			})
			.addCase(getMoviesBySearch.fulfilled, (state, { payload }) => {
				state.pending = false;
				state.setOfMovies = payload.results;
				if (payload.total_pages < state.pagination.maxPages) {
					state.pagination.maxPages = payload.total_pages;
				} else {
					state.pagination.maxPages = 500;
				}
			});
	},
});

export const selectMovies = createSelector(
	(state) => state.movies,
	(movies) => movies,
);
export const selectPagination = createSelector(
	(state) => state.movies,
	(movies) => movies.pagination,
);

const { setCurrentPage } = moviesSlice.actions;
export { setCurrentPage };
export default moviesSlice.reducer;
