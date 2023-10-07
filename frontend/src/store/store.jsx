import { configureStore } from '@reduxjs/toolkit';
import { allUserReducer, userReducer } from './reducer/user';
import { docReducer } from './reducer/document';

const store = configureStore({
	reducer: {
		user: userReducer,
		doc: docReducer,
		users: allUserReducer,
	},
});

export default store;
