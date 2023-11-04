import axios from 'axios'
import { notifyError, notifySuccess } from '../../components/alerts'

export const register =
  (name, email, password, cpassword, role, department) => async (dispatch) => {
    try {
      dispatch({ type: 'registerRequest' })

      const { data } = await axios.post(
        `http://localhost:3000/api/v1/register`,
        { name, email, password, cpassword, role, department },
        {
          headers: {
            'Content-type': 'application/json',
          },

          withCredentials: true,
        }
      )

      dispatch({ type: 'registerSuccess', payload: data })
      notifySuccess('register successful')
    } catch (error) {
      dispatch({ type: 'registerFail', payload: error.response.data.message })
      notifyError(error.response.data.message)
    }
  }

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'loginRequest' })

    const { data } = await axios.post(
      `http://localhost:3000/api/v1/login`,
      { email, password },
      {
        headers: {
          'Content-type': 'application/json',
        },

        withCredentials: true,
      }
    )

    dispatch({ type: 'loginSuccess', payload: data })
    notifySuccess('login successful')
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}

export const changePassword = (oldPassword, newPassword, cpassword) => async (dispatch) => {
  try {
    dispatch({ type: 'changePasswordRequest' })

    const { data } = await axios.put(
      `http://localhost:3000/api/v1/changepassword`,
      { oldPassword, newPassword, cpassword },
      {
        headers: {
          'Content-type': 'application/json',
        },

        withCredentials: true,
      }
    )

    dispatch({ type: 'changePasswordSuccess', payload: data })
    notifySuccess('password changed successful')
  } catch (error) {
    dispatch({
      type: 'changePasswordFail',
      payload: error.response.data.message,
    })
    notifyError(error.response.data.message)
  }
}

export const profile = () => async (dispatch) => {
  try {
    dispatch({ type: 'profileRequest' })

    const { data } = await axios.get(
      `http://localhost:3000/api/v1/profile`,

      {
        withCredentials: true,
      }
    )
    dispatch({ type: 'profileSuccess', payload: data.user })
  } catch (error) {
    dispatch({ type: 'profileFail', payload: error.response.data.message })
  }
}

export const allUsers =
  (page, search = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: 'alluserRequest' })

      const { data } = await axios.get(
        `http://localhost:3000/api/v1/users?page=${page}&name=${search}`,

        {
          withCredentials: true,
        }
      )
      dispatch({ type: 'alluserSuccess', payload: data })
    } catch (error) {
      dispatch({ type: 'alluserFail', payload: error.response.data.message })
    }
  }

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: 'logoutRequest' })

    const { data } = await axios.get(`http://localhost:3000/api/v1/logout`, {
      withCredentials: true,
    })
    dispatch({ type: 'logoutSuccess', payload: data.message })
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message })
  }
}

export const delUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'delUserRequest' })

    const { data } = await axios.delete(
      `http://localhost:3000/api/v1/user/${id}`,

      {
        withCredentials: true,
      }
    )
    notifySuccess(data.message)
    dispatch({ type: 'delUserSuccess', payload: data })
  } catch (error) {
    dispatch({ type: 'delUserFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}

export const updateUser = (id, role, department) => async (dispatch) => {
  try {
    dispatch({ type: 'updateUserRequest' })

    const { data } = await axios.put(
      `http://localhost:3000/api/v1/user/${id}`,
      { role, department },
      {
        headers: {
          'Content-type': 'application/json',
        },

        withCredentials: true,
      }
    )

    dispatch({ type: 'updateUserSuccess', payload: data })
    notifySuccess('updateUser successful')
  } catch (error) {
    dispatch({ type: 'updateUserFail', payload: error.response.data.message })
    notifyError(error.response.data.message)
  }
}
