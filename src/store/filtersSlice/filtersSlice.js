import { createSelector, createSlice } from '@reduxjs/toolkit';

export const setOfSorts = {
	votes: 'votes',
	popular: 'popular',
};

const initialState = {
	search: '',
	sortBy: setOfSorts.popular,
	genres: [],
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setSearch(state, { payload }) {
			state.search = payload;
		},
		setSortBy(state, { payload }) {
			state.sortBy = payload;
		},
		setGenres(state, { payload }) {
			state.genres = payload;
		},
		resetFilters() {
			return initialState;
		},
	},
	extraReducers: (builder) => {},
});

export const selectFilters = createSelector(
	(state) => state.filters,
	(filters) => filters,
);

const { setSearch, setSortBy, setGenres, resetFilters } = filtersSlice.actions;
export { setSearch, setSortBy, setGenres, resetFilters };
export default filtersSlice.reducer;
