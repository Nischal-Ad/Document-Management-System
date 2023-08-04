import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

//normal components
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/UserNav';
import Home from '../pages/user/home';
import Documents from '../pages/user/document/view document';
import AddUser from '../pages/admin/adduser/user';
import UploadDoc from '../pages/user/document/uploaddoc';
import DocDetails from '../pages/user/document/details';
import AdminHome from '../pages/admin/home';
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
				<Route path='/documents/:id' element={<DocDetails />} />
				<Route path='/add/document' element={<UploadDoc />} />
				<Route path='/add/user' element={<AddUser />} />
				<Route path='/adminhome' element={<AdminHome />} />
			</Route>
			{/* end of ProtectedRoute for users  */}
		</>
	)
);

export default router;
