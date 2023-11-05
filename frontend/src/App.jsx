import { useEffect, useState } from 'react'
import WebFont from 'webfontloader'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, profile } from './store/action/user'
import Router from './router/Routes'
import { allDoc } from './store/action/document'
import { allCategory } from './store/action/category'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { allDepartment } from './store/action/department'
import Loading from './components/Loading'

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

    if (isAuthenticated) {
      dispatch(allDoc())
      dispatch(allCategory())
      dispatch(allDepartment())
      dispatch(allUsers())
    }
  }, [dispatch, isAuthenticated])

  if (!isPageLoaded && (loading || loading === undefined)) {
    return <Loading />
  }

  if (!isPageLoaded && !loading) {
    setIsPageLoaded(true)
  }
  ChartJS.register(ArcElement, Tooltip, Legend)
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
