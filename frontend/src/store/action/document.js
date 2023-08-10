import axios from 'axios';

export const allDoc = () => async (dispatch) => {
	try {
		dispatch({ type: 'allDocRequest' });

		const { data } = await axios.get(
			`http://localhost:3000/api/v1/getdoc`,

			{
				withCredentials: true,
			}
		);
		dispatch({ type: 'allDocSuccess', payload: data });
	} catch (error) {
		dispatch({ type: 'allDocFail', payload: error.response.data.message });
	}
};

export const delDoc = (id) => async (dispatch) => {
	try {
		dispatch({ type: 'delDocRequest' });

		const { data } = await axios.delete(
			`http://localhost:3000/api/v1/deletedoc/${id}`,

			{
				withCredentials: true,
			}
		);
		dispatch({ type: 'delDocSuccess', payload: data });
	} catch (error) {
		dispatch({ type: 'delDocFail', payload: error.response.data.message });
	}
};
