import axios from 'axios';

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
	} catch (error) {
		dispatch({ type: 'loginFail', payload: error.response.data.message });
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
