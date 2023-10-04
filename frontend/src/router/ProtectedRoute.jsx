import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuth = false, nav, footer, isloading = false, isAdmin = false, adminRoute = false, userRoute = false }) => {
	if (!isAuth) {
		return <Navigate to={'/'} replace={true} />;
	}

	if (userRoute && isAdmin) {
		return <Navigate to={'/adminhome'} replace={true} />;
	}

	if (adminRoute && !isAdmin) {
		return <Navigate to={'/home'} replace={true} />;
	}

	return isloading ? (
		'loading...'
	) : (
		<>
			{nav}
			<Outlet />
			{footer}
		</>
	);
};

export default ProtectedRoute;
