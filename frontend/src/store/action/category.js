import axios from 'axios'
import { notifyError, notifySuccess } from '../../components/alerts'

export const allCategory = () => async (dispatch) => {
  try {
    dispatch({ type: 'allCategoryRequest' })

    const { data } = await axios.get(
      `http://localhost:3000/api/v1/allcategory`,

      {
        withCredentials: true,
      }
    )
    dispatch({ type: 'allCategorySuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'allCategoryFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}

export const delCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'delCategoryRequest' })

    const { data } = await axios.delete(
      `http://localhost:3000/api/v1/deletecategory/${id}`,

      {
        withCredentials: true,
      }
    )
    notifySuccess(data.message)
    dispatch({ type: 'delCategorySuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'delCategoryFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}

export const addCategory = (name) => async (dispatch) => {
  try {
    dispatch({ type: 'addCategoryRequest' })

    const { data } = await axios.post(
      `http://localhost:3000/api/v1/addcategory`,
      { name },
      {
        headers: { 'Content-type': 'application/json' },
        withCredentials: true,
      }
    )
    dispatch({ type: 'addCategorySuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'addCategoryFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}
