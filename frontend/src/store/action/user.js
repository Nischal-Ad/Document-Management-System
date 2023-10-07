import axios from 'axios';
import { notifyError, notifySuccess } from '../../components/alerts';

export const register = (name, email, password, cpassword, role, department) => async (dispatch) => {
	try {
		dispatch({ type: 'registerRequest' });

		const { data } = await axios.post(
			`http://localhost:3000/api/v1/register`,
			{ name, email, password, cpassword, role, department },
			{
				headers: {
					'Content-type': 'application/json',
				},

				withCredentials: true,
			}
		);

		dispatch({ type: 'registerSuccess', payload: data });
		notifySuccess('register successful');
	} catch (error) {
		dispatch({ type: 'registerFail', payload: error.response.data.message });
		notifyError(error.response.data.message);
	}
};

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: 'loginRequest' });

		const { data } = await axios.post(
			`http://localhost:3000/api/v1/login`,
			{ email, password },
			{
				headers: {
					'Content-type': 'application/json',
				},

				withCredentials: true,
			}
		);

		dispatch({ type: 'loginSuccess', payload: data });
		notifySuccess('login successful');
	} catch (error) {
		dispatch({ type: 'loginFail', payload: error.response.data.message });
		notifyError(error.response.data.message);
	}
};

export const profile = () => async (dispatch) => {
	try {
		dispatch({ type: 'profileRequest' });

		const { data } = await axios.get(
			`http://localhost:3000/api/v1/profile`,

			{
				withCredentials: true,
			}
		);
		dispatch({ type: 'profileSuccess', payload: data.user });
	} catch (error) {
		dispatch({ type: 'profileFail', payload: error.response.data.message });
	}
};

export const allUsers = () => async (dispatch) => {
	try {
		dispatch({ type: 'alluserRequest' });

		const { data } = await axios.get(
			`http://localhost:3000/api/v1/users`,

			{
				withCredentials: true,
			}
		);
		dispatch({ type: 'alluserSuccess', payload: data });
	} catch (error) {
		dispatch({ type: 'alluserFail', payload: error.response.data.message });
	}
};

export const logout = () => async (dispatch) => {
	try {
		dispatch({ type: 'logoutRequest' });

		const { data } = await axios.get(`http://localhost:3000/api/v1/logout`, {
			withCredentials: true,
		});
		dispatch({ type: 'logoutSuccess', payload: data.message });
	} catch (error) {
		dispatch({ type: 'logoutFail', payload: error.response.data.message });
	}
};
