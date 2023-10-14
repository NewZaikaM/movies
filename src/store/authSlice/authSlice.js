import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiTMDB from '../../api/api';

const getRequestToken = createAsyncThunk('users/getRequestToken', async () => {
	return await apiTMDB.createRequestToken();
});
const getSessionId = createAsyncThunk(
	'users/getSessionId',
	async (request_token) => {
		return await apiTMDB.createSessionId(request_token);
	},
);

const initialState = {
	currentUser: {
		request_token: null,
		session_id: null,
		name: null,
		email: null,
		password: null,
	},
	users: JSON.parse(localStorage.getItem('users')) || [],
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCurrentUser(state, { payload }) {
			state.currentUser = { ...state.currentUser, ...payload };
		},
		createUser(state, { payload }) {
			state.currentUser = { ...state.currentUser, ...payload };
			state.users.push({ ...state.currentUser, ...payload });
		},
		clearCurrentUser(state) {
			state.currentUser = initialState.currentUser;
		},
		updateUsers(state) {
			localStorage.setItem('users', JSON.stringify([...state.users]));
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getRequestToken.fulfilled, (state, { payload }) => {
			state.currentUser.request_token = payload.request_token;
		});
		builder.addCase(getSessionId.fulfilled, (state, action) => {
			state.currentUser.session_id = action.payload?.session_id;
		});
	},
});

const {
	setCurrentUser,
	clearCurrentUser,
	createUser,
	updateUsers,
} = authSlice.actions;
export {
	getRequestToken,
	getSessionId,
	setCurrentUser,
	clearCurrentUser,
	createUser,
	updateUsers,
};
export default authSlice.reducer;
