import axios from 'axios'
import { notifyError, notifySuccess } from '../../components/alerts'

export const allDoc =
  (page, search = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: 'allDocRequest' })

      const { data } = await axios.get(
        `http://localhost:3000/api/v1/getdoc?page=${page}&name=${search}`,

        {
          withCredentials: true,
        }
      )
      dispatch({ type: 'allDocSuccess', payload: data })
    } catch (error) {
      dispatch({ type: 'allDocFail', payload: error.response.data.message })
      notifyError(error.response.data.message)
    }
  }

export const delDoc = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'delDocRequest' })

    const { data } = await axios.delete(
      `http://localhost:3000/api/v1/deletedoc/${id}`,

      {
        withCredentials: true,
      }
    )
    notifySuccess(data.message)
    dispatch({ type: 'delDocSuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'delDocFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}

export const addDoc = (payload) => async (dispatch) => {
  try {
    dispatch({ type: 'addDocRequest' })

    const { data } = await axios.post(`http://localhost:3000/api/v1/createdoc`, payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    })
    notifySuccess(data.message)
    dispatch({ type: 'addDocSuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'addDocFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}

export const oneDoc = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'oneDocRequest' })

    const { data } = await axios.get(
      `http://localhost:3000/api/v1/getonedoc/${id}`,

      {
        withCredentials: true,
      }
    )
    dispatch({ type: 'oneDocSuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'oneDocFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}
