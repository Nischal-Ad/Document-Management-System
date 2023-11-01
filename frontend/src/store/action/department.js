import axios from 'axios'
import { notifyError, notifySuccess } from '../../components/alerts'

export const allDepartment = () => async (dispatch) => {
  try {
    dispatch({ type: 'allDepartmentRequest' })

    const { data } = await axios.get(
      `http://localhost:3000/api/v1/alldepartment`,

      {
        withCredentials: true,
      }
    )
    dispatch({ type: 'allDepartmentSuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'allDepartmentFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}

export const delDepartment = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'delDepartmentRequest' })

    const { data } = await axios.delete(
      `http://localhost:3000/api/v1/deletedepartment/${id}`,

      {
        withCredentials: true,
      }
    )
    notifySuccess(data.message)
    dispatch({ type: 'delDepartmentSuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'delDepartmentFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}

export const addDepartment = (name) => async (dispatch) => {
  try {
    dispatch({ type: 'addDepartmentRequest' })

    const { data } = await axios.post(
      `http://localhost:3000/api/v1/adddepartment`,
      { name },
      {
        headers: { 'Content-type': 'application/json' },
        withCredentials: true,
      }
    )
    dispatch({ type: 'addDepartmentSuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'addDepartmentFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}
