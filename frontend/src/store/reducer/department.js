import { createReducer } from '@reduxjs/toolkit'

export const departmentReducer = createReducer(
  {},
  {
    allDepartmentRequest: (state) => {
      state.loading = true
    },
    allDepartmentSuccess: (state, action) => {
      state.loading = false
      state.department = action.payload.data
      state.message = action.payload.message
    },
    allDepartmentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    delDepartmentRequest: (state) => {
      state.loading = true
    },
    delDepartmentSuccess: (state, action) => {
      state.loading = false
      state.department = action.payload.data
      state.message = action.payload.message
    },
    delDepartmentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
    clearMessage: (state) => {
      state.message = null
    },
    addDepartmentRequest: (state) => {
      state.loading = true
    },
    addDepartmentSuccess: (state, action) => {
      state.loading = false
      state.department = action.payload.data
      state.message = action.payload.message
    },
    addDepartmentFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  }
)
