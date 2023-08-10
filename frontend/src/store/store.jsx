import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducer/user';
import { docReducer } from './reducer/document';

const store = configureStore({
	reducer: {
		user: userReducer,
		doc: docReducer,
	},
});

export default store;
