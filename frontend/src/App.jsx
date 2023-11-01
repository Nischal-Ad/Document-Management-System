import { useEffect, useState } from 'react'
import WebFont from 'webfontloader'
import { useDispatch, useSelector } from 'react-redux'
import { profile } from './store/action/user'
import Router from './router/Routes'
import { allDoc } from './store/action/document'
import { allCategory } from './store/action/category'
import { allDepartment } from './store/action/department'

const App = () => {
  const dispatch = useDispatch()
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const { isAuthenticated, loading, user } = useSelector((store) => store.user)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito', 'Quicksand', 'Poppins'],
      },
    })
    dispatch(profile())
    dispatch(allDoc())
    dispatch(allCategory())
    dispatch(allDepartment())
  }, [dispatch])

  if (!isPageLoaded && (loading || loading === undefined)) {
    return <div>loading</div>
  }

  if (!isPageLoaded && !loading) {
    setIsPageLoaded(true)
  }

  return (
    isPageLoaded && (
      <Router
        isAuth={isAuthenticated}
        isLoading={loading}
        isAdmin={user?.role === 'admin' ? true : false}
      />
    )
  )
}

export default App
