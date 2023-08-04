import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer(
	{},
	{
		loginRequest: (state) => {
			state.loading = true;
		},
		loginSuccess: (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.message = action.payload.message;
		},
		loginFail: (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload;
		},
		profileRequest: (state) => {
			state.loading = true;
		},
		profileSuccess: (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		profileFail: (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload;
		},
		logoutRequest: (state) => {
			state.loading = true;
		},
		logoutSuccess: (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.user = null;
			state.message = action.payload;
		},
		logoutFail: (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.error = action.payload;
		},
		clearError: (state) => {
			state.error = null;
		},
		clearMessage: (state) => {
			state.message = null;
		},
	}
);
