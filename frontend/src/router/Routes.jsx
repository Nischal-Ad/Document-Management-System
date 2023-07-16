import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

//normal components
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/UserNav';
import Home from '../pages/user/home';
import Documents from '../pages/user/document/view document';
import ViewDocument from '../pages/user/document/view document/Details';
import Error from '../shared/Error';
import Auth from '../pages/auth';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* normal routes  */}
			<Route path='/' element={<Auth />} />
			<Route path='*' element={<Error />} />
			{/* end of normal routes  */}

			{/* ProtectedRoute for users  */}
			<Route element={<ProtectedRoute isAuth={true} nav={<Navbar />} footer={<Footer />} />}>
				<Route path='/home' element={<Home />} />
				<Route path='/documents' element={<Documents />} />
				<Route path='/documents/:id' element={<ViewDocument />} />
			</Route>
			{/* end of ProtectedRoute for users  */}
		</>
	)
);

export default router;
