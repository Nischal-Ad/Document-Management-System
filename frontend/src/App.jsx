import { useEffect } from 'react';
import WebFont from 'webfontloader';
import { useDispatch, useSelector } from 'react-redux';
import { profile } from './store/action/user';
import Router from './router/Routes';
import { allDoc } from './store/action/document';

const App = () => {
	const dispatch = useDispatch();
	const { isAuthenticated, loading } = useSelector((store) => store.user);
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Nunito', 'Quicksand', 'Poppins'],
			},
		});
		dispatch(profile());
		dispatch(allDoc());
	}, [dispatch]);

	return <Router isAuth={isAuthenticated} isLoading={loading} />;
};

export default App;
