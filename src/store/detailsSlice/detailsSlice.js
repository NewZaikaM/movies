import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import apiTMDB from '../../api/api';

export const getDetailsMovie = createAsyncThunk(
	'details/getDetailsMovie',
	async (movieId) => {
		const details = await apiTMDB.getDetailsMovie(movieId);
		const credits = await apiTMDB.getCreditsMovie(movieId);
		const similar = await apiTMDB.getSimilarMovie(movieId);
		const detailsState = {
			details,
			credits,
			similar,
		};
		return detailsState;
	},
);

const initialState = {
	details: {},
	credits: [],
	similar: [],
	pending: false,
};

const detailsSlice = createSlice({
	name: 'details',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getDetailsMovie.pending, (state) => {
				state.pending = true;
			})
			.addCase(getDetailsMovie.fulfilled, (state, { payload }) => {
				return {...payload, pending: false}
			});
	},
});

export const selectDetails = createSelector(
	(state) => state.details,
	(details) => details,
);

export default detailsSlice.reducer;
