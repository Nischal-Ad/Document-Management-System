import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuth = false, nav, footer, isloading = false }) => {
	if (!isAuth) {
		return <Navigate to={'/'} replace={true} />;
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
