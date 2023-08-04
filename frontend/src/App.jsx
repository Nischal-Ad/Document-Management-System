import { useEffect } from 'react';
import WebFont from 'webfontloader';
import router from './router/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { profile } from './store/action/user';
import Router from './router/Routes';

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
	}, []);

	return <Router isAuth={isAuthenticated} isLoading={loading} />;
};

export default App;
