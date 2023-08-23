import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { useDispatch, useSelector } from 'react-redux';
import { profile } from './store/action/user';
import Router from './router/Routes';
import { allDoc } from './store/action/document';

const App = () => {
	const dispatch = useDispatch();
	const [isPageLoaded, setIsPageLoaded] = useState(false);
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

	if (!isPageLoaded && (loading || loading === undefined)) {
		return <div>loading</div>;
	}

	if (!isPageLoaded && !loading) {
		setIsPageLoaded(true);
	}

	return isPageLoaded && <Router isAuth={isAuthenticated} isLoading={loading} />;
};

export default App;
