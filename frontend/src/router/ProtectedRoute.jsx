import { Navigate, Outlet } from 'react-router-dom'
import Loading from '../components/Loading'

const ProtectedRoute = ({
  isAuth = false,
  nav,
  footer,
  isloading = false,
  isAdmin = false,
  adminRoute = false,
  userRoute = false,
}) => {
  if (!isAuth) {
    return <Navigate to={'/'} replace={true} />
  }

  if (userRoute && isAdmin) {
    return <Navigate to={'/adminhome'} replace={true} />
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to={'/home'} replace={true} />
  }

  return isloading ? (
    <Loading />
  ) : (
    <>
      {nav}
      <Outlet />
      {footer}
    </>
  )
}

export default ProtectedRoute
