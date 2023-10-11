import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

//normal components
import Footer from '../shared/footer/Footer'
import AdminFooter from '../shared/navbar/admin/Footer'
import Navbar from '../shared/navbar/UserNav'
import AdminNav from '../shared/navbar/admin'
import Home from '../pages/user/home'
import Documents from '../pages/user/document/view document'
import Department from '../pages/admin/view department'
import AddUser from '../pages/admin/adduser/user'
import UploadDoc from '../pages/user/document/uploaddoc'
import DocDetails from '../pages/user/document/details'
import AdminHome from '../pages/admin/home'
import Error from '../shared/Error'
import Auth from '../pages/auth'
import ChangePassword from '../pages/user/changepassword'

const Router = ({ isAuth, isLoading, isAdmin }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* normal routes  */}
        <Route path="/" element={<Auth />} />
        <Route path="*" element={<Error />} />
        {/* end of normal routes  */}

        {/* for al users  */}
        <Route element={<ProtectedRoute isAuth={isAuth} isloading={isLoading} />}>
          <Route path="/changepassword" element={<ChangePassword />} />
        </Route>

        {/* ProtectedRoute for users  */}
        <Route
          element={
            <ProtectedRoute
              isAuth={isAuth}
              isloading={isLoading}
              nav={<Navbar />}
              footer={<Footer />}
              userRoute={true}
              isAdmin={isAdmin}
            />
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/:id" element={<DocDetails />} />
          <Route path="/add/document" element={<UploadDoc />} />
        </Route>
        {/* end of ProtectedRoute for users  */}

        {/* //admin route  */}
        <Route
          element={
            <ProtectedRoute
              isAuth={isAuth}
              isloading={isLoading}
              nav={<AdminNav />}
              footer={<AdminFooter />}
              adminRoute={true}
              isAdmin={isAdmin}
            />
          }
        >
          <Route path="/add/user" element={<AddUser />} />
          <Route path="/admin/departments" element={<Department />} />
          <Route path="/adminhome" element={<AdminHome />} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router} />
}

export default Router
